export interface QRCodeData {
    userId: string;
    timestamp: number;
    hash: string;
}
export declare class QRAttendanceService {
    private static readonly QR_EXPIRY_TIME;
    private static readonly QR_KEY_PREFIX;
    private static readonly qrCodeStorage;
    /**
     * Clean up expired QR codes from memory
     */
    private static cleanupExpiredQRCodes;
    /**
     * Generate a QR code for an employee
     * The QR code contains userId, timestamp, and a hash for security
     */
    static generateQRCode(userId: string): Promise<{
        qrCodeDataUrl: string;
        qrData: QRCodeData;
    }>;
    /**
     * Create an attendance record for an employee
     */
    private static createAttendanceRecord;
    /**
     * Validate a scanned QR code and create attendance record
     */
    static validateQRCode(qrData: QRCodeData, scannedByUserId: string): Promise<{
        isValid: boolean;
        userId?: string;
        attendanceId?: string;
        error?: string;
    }>;
    /**
     * Get current QR code for a user (if exists and not expired)
     */
    static getCurrentQRCode(userId: string): Promise<{
        qrCodeDataUrl: string;
        qrData: QRCodeData;
    } | null>;
}
//# sourceMappingURL=qrAttendance.service.d.ts.map