import { z } from "zod";
export declare const createAttendanceSchema: z.ZodObject<{
    workScheduleId: z.ZodString;
    date: z.ZodString;
    workedHours: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateAttendanceSchema: z.ZodObject<{
    workedHours: z.ZodOptional<z.ZodNumber>;
    validated: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const markDailyAttendanceSchema: z.ZodObject<{
    date: z.ZodString;
    presentEmployeeIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateAttendanceInput = z.infer<typeof createAttendanceSchema>;
export type UpdateAttendanceInput = z.infer<typeof updateAttendanceSchema>;
export type MarkDailyAttendanceInput = z.infer<typeof markDailyAttendanceSchema>;
//# sourceMappingURL=attendance.schema.d.ts.map