import type { Request, Response, NextFunction } from "express";
export declare class QRAttendanceController {
    /**
     * Generate QR code for the authenticated employee
     */
    static generateQRCode(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get current QR code for the authenticated employee (if exists)
     */
    static getCurrentQRCode(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Validate a scanned QR code (for vigiles)
     */
    static validateQRCode(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=qrAttendance.controller.d.ts.map