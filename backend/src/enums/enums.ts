import { z } from "zod";

export const payRunTypeEnum = z.enum(["DAILY", "WEEKLY", "MONTHLY"]);
export type PayRunTypeEnum = z.infer<typeof payRunTypeEnum>;

export const payRunStatusEnum = z.enum(["DRAFT", "APPROVED", "CLOSED"]);
export type PayRunStatusEnum = z.infer<typeof payRunStatusEnum>;

export const payslipStatusEnum = z.enum(["DRAFT", "APPROVED", "PAID", "PARTIAL", "PENDING"]);
export type PayslipStatusEnum = z.infer<typeof payslipStatusEnum>;
