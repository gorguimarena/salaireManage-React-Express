import { z } from "zod";
export const createAttendanceSchema = z.object({
    workScheduleId: z.string(),
    date: z.string(),
    workedHours: z.number().optional(),
});
export const updateAttendanceSchema = z.object({
    workedHours: z.number().optional(),
    validated: z.boolean().optional(),
});
export const markDailyAttendanceSchema = z.object({
    date: z.string(),
    presentEmployeeIds: z.array(z.string()),
});
//# sourceMappingURL=attendance.schema.js.map