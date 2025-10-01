import { z } from "zod";

export const paymentModeEnum = z.enum(["CASH", "BANK_TRANSFER", "ORANGE_MONEY", "WAVE", "OTHER"]);

export const createPaymentSchema = z.object({
  payslipId: z.string(),
  employeeId: z.string(),
  amount: z.number().positive(),
  mode: paymentModeEnum,
  note: z.string().optional(),
  receiptUrl: z.string().optional(),
});

export const updatePaymentSchema = z.object({
  amount: z.number().positive().optional(),
  mode: paymentModeEnum.optional(),
  note: z.string().optional(),
  receiptUrl: z.string().optional(),
});

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
export type UpdatePaymentInput = z.infer<typeof updatePaymentSchema>;