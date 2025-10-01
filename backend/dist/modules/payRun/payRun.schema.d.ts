import { z } from "zod";
export declare const createPayRunSchema: z.ZodObject<{
    periodStart: z.ZodString;
    periodEnd: z.ZodString;
    type: z.ZodEnum<{
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        WEEKLY: "WEEKLY";
    }>;
    companyId: z.ZodString;
}, z.core.$strip>;
export declare const generatePayslipsSchema: z.ZodObject<{
    payRunId: z.ZodString;
}, z.core.$strip>;
export declare const updatePayRunSchema: z.ZodObject<{
    status: z.ZodEnum<{
        DRAFT: "DRAFT";
        APPROVED: "APPROVED";
        CLOSED: "CLOSED";
    }>;
}, z.core.$strip>;
export type GeneratePayslipsInput = z.infer<typeof generatePayslipsSchema>;
export type CreatePayRunInput = z.infer<typeof createPayRunSchema>;
export type UpdatePayRunInput = z.infer<typeof updatePayRunSchema>;
//# sourceMappingURL=payRun.schema.d.ts.map