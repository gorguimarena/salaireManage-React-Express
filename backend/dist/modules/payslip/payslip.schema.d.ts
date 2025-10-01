import { z } from "zod";
export declare const createPayslipSchema: z.ZodObject<{
    employeeId: z.ZodString;
    payRunId: z.ZodString;
    gross: z.ZodNumber;
    deductions: z.ZodDefault<z.ZodNumber>;
    netPay: z.ZodNumber;
    daysWorked: z.ZodOptional<z.ZodNumber>;
    status: z.ZodDefault<z.ZodEnum<{
        DRAFT: "DRAFT";
        APPROVED: "APPROVED";
        PAID: "PAID";
        PARTIAL: "PARTIAL";
        PENDING: "PENDING";
    }>>;
}, z.core.$strip>;
export declare const updatePayslipSchema: z.ZodObject<{
    gross: z.ZodOptional<z.ZodNumber>;
    deductions: z.ZodOptional<z.ZodNumber>;
    netPay: z.ZodOptional<z.ZodNumber>;
    daysWorked: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        APPROVED: "APPROVED";
        PAID: "PAID";
        PARTIAL: "PARTIAL";
        PENDING: "PENDING";
    }>>;
    lockedAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export type CreatePayslipInput = z.infer<typeof createPayslipSchema>;
export type UpdatePayslipInput = z.infer<typeof updatePayslipSchema>;
//# sourceMappingURL=payslip.schema.d.ts.map