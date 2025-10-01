import { z } from "zod";
export declare const createWorkScheduleSchema: z.ZodObject<{
    startDate: z.ZodString;
    endDate: z.ZodString;
    hoursPerDay: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateAttendanceSchema: z.ZodObject<{
    validated: z.ZodBoolean;
    workedHours: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type CreateWorkScheduleInput = z.infer<typeof createWorkScheduleSchema>;
export type UpdateAttendanceInput = z.infer<typeof updateAttendanceSchema>;
//# sourceMappingURL=workSchedule.schema.d.ts.map