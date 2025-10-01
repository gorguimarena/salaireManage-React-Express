import { z } from "zod";
export declare const paymentModeEnum: z.ZodEnum<{
    CASH: "CASH";
    BANK_TRANSFER: "BANK_TRANSFER";
    ORANGE_MONEY: "ORANGE_MONEY";
    WAVE: "WAVE";
    OTHER: "OTHER";
}>;
export declare const createPaymentSchema: z.ZodObject<{
    payslipId: z.ZodString;
    employeeId: z.ZodString;
    amount: z.ZodNumber;
    mode: z.ZodEnum<{
        CASH: "CASH";
        BANK_TRANSFER: "BANK_TRANSFER";
        ORANGE_MONEY: "ORANGE_MONEY";
        WAVE: "WAVE";
        OTHER: "OTHER";
    }>;
    note: z.ZodOptional<z.ZodString>;
    receiptUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updatePaymentSchema: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    mode: z.ZodOptional<z.ZodEnum<{
        CASH: "CASH";
        BANK_TRANSFER: "BANK_TRANSFER";
        ORANGE_MONEY: "ORANGE_MONEY";
        WAVE: "WAVE";
        OTHER: "OTHER";
    }>>;
    note: z.ZodOptional<z.ZodString>;
    receiptUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
export type UpdatePaymentInput = z.infer<typeof updatePaymentSchema>;
//# sourceMappingURL=payment.schema.d.ts.map