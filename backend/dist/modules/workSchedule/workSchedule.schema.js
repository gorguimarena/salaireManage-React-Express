import { z } from "zod";
export const createWorkScheduleSchema = z.object({
    startDate: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date"),
    endDate: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date"),
    hoursPerDay: z.number().optional(),
});
export const updateAttendanceSchema = z.object({
    validated: z.boolean(),
    workedHours: z.number().optional(),
});
//# sourceMappingURL=workSchedule.schema.js.map