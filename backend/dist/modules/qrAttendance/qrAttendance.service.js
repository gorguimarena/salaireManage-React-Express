import QRCode from 'qrcode';
import crypto from 'crypto';
import { AppError } from '../../utils/AppError.js';
import prisma from '../../config/database.js';
export class QRAttendanceService {
    static QR_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds
    static QR_KEY_PREFIX = 'qr_attendance:';
    static qrCodeStorage = new Map();
    /**
     * Clean up expired QR codes from memory
     */
    static cleanupExpiredQRCodes() {
        const now = Date.now();
        for (const [key, entry] of this.qrCodeStorage.entries()) {
            if (now > entry.expiresAt) {
                this.qrCodeStorage.delete(key);
            }
        }
    }
    /**
     * Generate a QR code for an employee
     * The QR code contains userId, timestamp, and a hash for security
     */
    static async generateQRCode(userId) {
        const timestamp = Date.now();
        const dataToHash = `${userId}:${timestamp}:${process.env.JWT_SECRET}`;
        const hash = crypto.createHash('sha256').update(dataToHash).digest('hex');
        const qrData = {
            userId,
            timestamp,
            hash
        };
        // Store in memory with expiration
        const redisKey = `${this.QR_KEY_PREFIX}${userId}`;
        const expiresAt = Date.now() + this.QR_EXPIRY_TIME;
        this.qrCodeStorage.set(redisKey, {
            data: JSON.stringify(qrData),
            expiresAt
        });
        // Generate QR code as data URL
        const qrCodeDataUrl = await QRCode.toDataURL(JSON.stringify(qrData), {
            errorCorrectionLevel: 'M',
            type: 'image/png',
            width: 256,
            margin: 2
        });
        return { qrCodeDataUrl, qrData };
    }
    /**
     * Create an attendance record for an employee
     */
    static async createAttendanceRecord(employeeId, validatedByUserId) {
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            // Check if the vigile is delegated to validate fully
            const vigile = await prisma.user.findUnique({
                where: { id: validatedByUserId },
                select: { canValidateFully: true, role: { select: { name: true } } }
            });
            const isDelegatedVigile = vigile?.role?.name === 'VIGILE' && vigile.canValidateFully;
            // Find active work schedule for the employee on this date
            const workSchedule = await prisma.workSchedule.findFirst({
                where: {
                    employeeId,
                    startDate: { lte: today },
                    endDate: { gte: today },
                },
            });
            if (!workSchedule) {
                throw new Error('No active work schedule found for this employee');
            }
            // Check if attendance already exists for today
            const existingAttendance = await prisma.attendance.findFirst({
                where: {
                    workScheduleId: workSchedule.id,
                    date: today,
                },
            });
            if (existingAttendance) {
                // Update existing attendance
                const updateData = {
                    validatedBy: validatedByUserId,
                    validatedAt: new Date()
                };
                if (isDelegatedVigile) {
                    // Delegated vigile validates fully with default hours
                    updateData.validated = true;
                    updateData.workedHours = workSchedule.hoursPerDay || 8;
                }
                else {
                    // Regular vigile marks as pending admin validation
                    updateData.validated = false;
                    updateData.workedHours = null;
                }
                await prisma.attendance.update({
                    where: { id: existingAttendance.id },
                    data: updateData,
                });
                return existingAttendance.id;
            }
            else {
                // Create new attendance record
                const createData = {
                    workScheduleId: workSchedule.id,
                    date: today,
                    validatedBy: validatedByUserId,
                    validatedAt: new Date()
                };
                if (isDelegatedVigile) {
                    // Delegated vigile validates fully with default hours
                    createData.validated = true;
                    createData.workedHours = workSchedule.hoursPerDay || 8;
                }
                else {
                    // Regular vigile marks as pending admin validation
                    createData.validated = false;
                    createData.workedHours = null;
                }
                const attendance = await prisma.attendance.create({
                    data: createData,
                });
                return attendance.id;
            }
        }
        catch (error) {
            console.error('Error creating attendance record:', error);
            throw error;
        }
    }
    /**
     * Validate a scanned QR code and create attendance record
     */
    static async validateQRCode(qrData, scannedByUserId) {
        try {
            const { userId, timestamp, hash } = qrData;
            // Check if QR code has expired
            const now = Date.now();
            if (now - timestamp > this.QR_EXPIRY_TIME) {
                return { isValid: false, error: 'QR code has expired' };
            }
            // Verify hash
            const expectedDataToHash = `${userId}:${timestamp}:${process.env.JWT_SECRET}`;
            const expectedHash = crypto.createHash('sha256').update(expectedDataToHash).digest('hex');
            if (hash !== expectedHash) {
                return { isValid: false, error: 'Invalid QR code' };
            }
            // Clean up expired QR codes
            this.cleanupExpiredQRCodes();
            // Check if QR code exists in memory (not already used)
            const redisKey = `${this.QR_KEY_PREFIX}${userId}`;
            const storedEntry = this.qrCodeStorage.get(redisKey);
            // Check if expired
            if (!storedEntry || Date.now() > storedEntry.expiresAt) {
                return { isValid: false, error: 'QR code not found or already used' };
            }
            const storedData = storedEntry.data;
            if (!storedData) {
                return { isValid: false, error: 'QR code not found or already used' };
            }
            const storedQRData = JSON.parse(storedData);
            // Verify the stored data matches
            if (storedQRData.userId !== userId || storedQRData.timestamp !== timestamp || storedQRData.hash !== hash) {
                return { isValid: false, error: 'QR code data mismatch' };
            }
            // Remove the QR code from memory (one-time use)
            this.qrCodeStorage.delete(redisKey);
            // Create attendance record
            const attendanceId = await this.createAttendanceRecord(userId, scannedByUserId);
            return { isValid: true, userId, attendanceId };
        }
        catch (error) {
            console.error('Error validating QR code:', error);
            return { isValid: false, error: 'Invalid QR code format' };
        }
    }
    /**
     * Get current QR code for a user (if exists and not expired)
     */
    static async getCurrentQRCode(userId) {
        // Clean up expired QR codes
        this.cleanupExpiredQRCodes();
        const redisKey = `${this.QR_KEY_PREFIX}${userId}`;
        const storedEntry = this.qrCodeStorage.get(redisKey);
        if (!storedEntry) {
            return null;
        }
        // Check if expired
        const now = Date.now();
        if (now > storedEntry.expiresAt) {
            this.qrCodeStorage.delete(redisKey);
            return null;
        }
        const qrData = JSON.parse(storedEntry.data);
        // Generate QR code
        const qrCodeDataUrl = await QRCode.toDataURL(JSON.stringify(qrData), {
            errorCorrectionLevel: 'M',
            type: 'image/png',
            width: 256,
            margin: 2
        });
        return { qrCodeDataUrl, qrData };
    }
}
//# sourceMappingURL=qrAttendance.service.js.map