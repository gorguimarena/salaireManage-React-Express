import prisma from "../../config/database.js";
import type { UpdateAttendanceInput } from "./workSchedule.schema.js";


export class WorkScheduleService {

  static async getAttendances(companyId: string, workScheduleId: string) {
    return prisma.attendance.findMany({
      where: { workScheduleId },
      orderBy: { date: "asc" },
    });
  }

  static async updateAttendance(companyId: string, attendanceId: string, data: UpdateAttendanceInput) {
    return prisma.attendance.update({
      where: { id: attendanceId },
      data: {
        validated: data.validated,
        workedHours: data.workedHours ?? null,
      },
    });
  }
}

