import { z } from "zod";
import { payslipStatusEnum } from "../../enums/enums.js";

export const createPayslipSchema = z.object({
  employeeId: z.string(),
  payRunId: z.string(),
  gross: z.number().min(0),
  deductions: z.number().min(0).default(0),
  netPay: z.number().min(0),
  daysWorked: z.number().optional(),
  status: payslipStatusEnum.default("DRAFT"),
});

export const updatePayslipSchema = z.object({
  gross: z.number().min(0).optional(),
  deductions: z.number().min(0).optional(),
  netPay: z.number().min(0).optional(),
  daysWorked: z.number().optional(),
  status: payslipStatusEnum.optional(),
  lockedAt: z.date().optional(),
});

export type CreatePayslipInput = z.infer<typeof createPayslipSchema>;
export type UpdatePayslipInput = z.infer<typeof updatePayslipSchema>;