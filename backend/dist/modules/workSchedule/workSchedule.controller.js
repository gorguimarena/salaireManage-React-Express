import { createWorkScheduleSchema, updateAttendanceSchema } from "./workSchedule.schema.js";
import { WorkScheduleService } from "./workSchedule.service.js";
export class WorkScheduleController {
    static async getAttendances(req, res, next) {
        try {
            const { employeeId } = req.params;
            const companyId = req.user?.companyId;
            const attendances = await WorkScheduleService.getAttendances(companyId, employeeId);
            res.json(attendances);
        }
        catch (err) {
            next(err);
        }
    }
    static async updateAttendance(req, res, next) {
        try {
            const { attendanceId } = req.params;
            const data = updateAttendanceSchema.parse(req.body);
            const companyId = req.user?.companyId;
            const attendance = await WorkScheduleService.updateAttendance(companyId, attendanceId, data);
            res.json(attendance);
        }
        catch (err) {
            next(err);
        }
    }
}
//# sourceMappingURL=workSchedule.controller.js.map