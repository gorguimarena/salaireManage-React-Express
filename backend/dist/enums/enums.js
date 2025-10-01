import { z } from "zod";
export const payRunTypeEnum = z.enum(["DAILY", "WEEKLY", "MONTHLY"]);
export const payRunStatusEnum = z.enum(["DRAFT", "APPROVED", "CLOSED"]);
export const payslipStatusEnum = z.enum(["DRAFT", "APPROVED", "PAID", "PARTIAL", "PENDING"]);
//# sourceMappingURL=enums.js.map