import type { Request, Response, NextFunction } from "express";
export declare class AttendanceController {
    static getCompanyId(req: Request): string;
    static create(req: Request, res: Response, next: NextFunction): Promise<void>;
    static listByEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
    static listByCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
    static update(req: Request, res: Response, next: NextFunction): Promise<void>;
    static validate(req: Request, res: Response, next: NextFunction): Promise<void>;
    static bulkCreate(req: Request, res: Response, next: NextFunction): Promise<void>;
    static markDailyAttendance(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getTodayAttendances(req: Request, res: Response, next: NextFunction): Promise<void>;
    static validateAttendanceWithHours(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getPendingAttendances(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=attendance.controller.d.ts.map