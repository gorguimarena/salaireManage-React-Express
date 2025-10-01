import { z } from "zod";
import { payRunStatusEnum, payRunTypeEnum } from "../../enums/enums.js";
export const createPayRunSchema = z.object({
    periodStart: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date"),
    periodEnd: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date"),
    type: payRunTypeEnum,
    companyId: z.string()
});
export const generatePayslipsSchema = z.object({
    payRunId: z.string().uuid(),
});
export const updatePayRunSchema = z.object({
    status: payRunStatusEnum,
});
//# sourceMappingURL=payRun.schema.js.map