import type { Request, Response, NextFunction } from "express";
import { QRAttendanceService } from "./qrAttendance.service.js";
import type { QRCodeData } from "./qrAttendance.service.js";
import { AppError } from "../../utils/AppError.js";
import prisma from "../../config/database.js";

export class QRAttendanceController {
  /**
   * Generate QR code for the authenticated employee
   */
  static async generateQRCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user) {
        throw new AppError("Authentication required", 401);
      }

      const userId = req.user.id;

      // Check if user is an active employee
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { isActive: true, contractType: true, companyId: true }
      });

      if (!user || !user.isActive || !user.contractType || !user.companyId) {
        throw new AppError("Only active employees can generate QR codes", 403);
      }

      const { qrCodeDataUrl, qrData } = await QRAttendanceService.generateQRCode(userId);

      res.json({
        success: true,
        data: {
          qrCode: qrCodeDataUrl,
          expiresAt: qrData.timestamp + QRAttendanceService['QR_EXPIRY_TIME'],
          validFor: QRAttendanceService['QR_EXPIRY_TIME'] / 1000 / 60 // minutes
        }
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get current QR code for the authenticated employee (if exists)
   */
  static async getCurrentQRCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user) {
        throw new AppError("Authentication required", 401);
      }

      const userId = req.user.id;
      const result = await QRAttendanceService.getCurrentQRCode(userId);

      if (!result) {
        res.json({
          success: true,
          data: null,
          message: "No active QR code found"
        });
        return;
      }

      res.json({
        success: true,
        data: {
          qrCode: result.qrCodeDataUrl,
          expiresAt: result.qrData.timestamp + QRAttendanceService['QR_EXPIRY_TIME'],
          validFor: QRAttendanceService['QR_EXPIRY_TIME'] / 1000 / 60 // minutes
        }
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Validate a scanned QR code (for vigiles)
   */
  static async validateQRCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user) {
        throw new AppError("Authentication required", 401);
      }

      const scannedByUserId = req.user.id;

      // Check if user is a vigile
      if (req.user.role !== 'VIGILE') {
        throw new AppError("Only vigiles can validate QR codes", 403);
      }

      const { qrData }: { qrData: string } = req.body;

      if (!qrData) {
        throw new AppError("QR data is required", 400);
      }

      let parsedQRData: QRCodeData;
      try {
        parsedQRData = JSON.parse(qrData);
      } catch (error) {
        throw new AppError("Invalid QR code format", 400);
      }

      const validation = await QRAttendanceService.validateQRCode(parsedQRData, scannedByUserId);

      if (!validation.isValid) {
        res.json({
          success: false,
          error: validation.error,
          message: "QR code validation failed"
        });
        return;
      }

      // Get employee details for response
      const employee = await prisma.user.findUnique({
        where: { id: validation.userId! },
        select: { fullName: true, position: true }
      });

      // Get vigile details
      const vigile = await prisma.user.findUnique({
        where: { id: scannedByUserId },
        select: { fullName: true }
      });

      res.json({
        success: true,
        message: "Attendance validated successfully",
        data: {
          employee: employee,
          attendance: { id: validation.attendanceId },
          validatedAt: new Date(),
          validatedBy: vigile?.fullName || req.user.email
        }
      });

    } catch (error) {
      next(error);
    }
  }
}