import { AttendanceService } from "./attendance.service.js";
import { AppError } from "../../utils/AppError.js";
export class AttendanceController {
    static getCompanyId(req) {
        const user = req.user;
        return user.companyId;
    }
    static async create(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const attendance = await AttendanceService.create(companyId, req.body);
            res.status(201).json(attendance);
        }
        catch (error) {
            next(error);
        }
    }
    static async listByEmployee(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const { employeeId } = req.params;
            const { startDate, endDate } = req.query;
            if (!employeeId) {
                throw new Error("employeeId is required");
            }
            const start = startDate ? new Date(startDate) : undefined;
            const end = endDate ? new Date(endDate) : undefined;
            const attendances = await AttendanceService.listByEmployee(companyId, employeeId, start, end);
            res.json(attendances);
        }
        catch (error) {
            next(error);
        }
    }
    static async listByCompany(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const { startDate, endDate } = req.query;
            const start = startDate ? new Date(startDate) : undefined;
            const end = endDate ? new Date(endDate) : undefined;
            const attendances = await AttendanceService.listByCompany(companyId, start, end);
            res.json(attendances);
        }
        catch (error) {
            next(error);
        }
    }
    static async update(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const { id } = req.params;
            if (!id) {
                throw new Error("attendance id is required");
            }
            const attendance = await AttendanceService.update(companyId, id, req.body);
            res.json(attendance);
        }
        catch (error) {
            next(error);
        }
    }
    static async validate(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const { id } = req.params;
            if (!id) {
                throw new Error("attendance id is required");
            }
            const attendance = await AttendanceService.validate(companyId, id);
            res.json(attendance);
        }
        catch (error) {
            next(error);
        }
    }
    static async bulkCreate(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const result = await AttendanceService.bulkCreate(companyId, req.body.attendances);
            res.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
    static async markDailyAttendance(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const result = await AttendanceService.markDailyAttendance(companyId, req.body);
            res.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
    static async getTodayAttendances(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const attendances = await AttendanceService.getTodayAttendances(companyId);
            res.json(attendances);
        }
        catch (error) {
            next(error);
        }
    }
    static async validateAttendanceWithHours(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const { id } = req.params;
            const { workedHours } = req.body;
            const validatedByUserId = req.user.id;
            if (!id) {
                throw new Error("attendance id is required");
            }
            if (workedHours === undefined || workedHours < 0) {
                throw new Error("workedHours is required and must be positive");
            }
            const attendance = await AttendanceService.validateAttendanceWithHours(companyId, id, validatedByUserId, workedHours);
            res.json(attendance);
        }
        catch (error) {
            next(error);
        }
    }
    static async getPendingAttendances(req, res, next) {
        try {
            const companyId = AttendanceController.getCompanyId(req);
            const attendances = await AttendanceService.getPendingAttendances(companyId);
            res.json(attendances);
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=attendance.controller.js.map