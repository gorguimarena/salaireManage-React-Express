import prisma from "../../config/database.js";
export class WorkScheduleService {
    static async getAttendances(companyId, workScheduleId) {
        return prisma.attendance.findMany({
            where: { workScheduleId },
            orderBy: { date: "asc" },
        });
    }
    static async updateAttendance(companyId, attendanceId, data) {
        return prisma.attendance.update({
            where: { id: attendanceId },
            data: {
                validated: data.validated,
                workedHours: data.workedHours ?? null,
            },
        });
    }
}
//# sourceMappingURL=workSchedule.service.js.map