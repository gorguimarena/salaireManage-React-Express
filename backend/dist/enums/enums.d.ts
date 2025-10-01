import { z } from "zod";
export declare const payRunTypeEnum: z.ZodEnum<{
    DAILY: "DAILY";
    MONTHLY: "MONTHLY";
    WEEKLY: "WEEKLY";
}>;
export type PayRunTypeEnum = z.infer<typeof payRunTypeEnum>;
export declare const payRunStatusEnum: z.ZodEnum<{
    DRAFT: "DRAFT";
    APPROVED: "APPROVED";
    CLOSED: "CLOSED";
}>;
export type PayRunStatusEnum = z.infer<typeof payRunStatusEnum>;
export declare const payslipStatusEnum: z.ZodEnum<{
    DRAFT: "DRAFT";
    APPROVED: "APPROVED";
    PAID: "PAID";
    PARTIAL: "PARTIAL";
    PENDING: "PENDING";
}>;
export type PayslipStatusEnum = z.infer<typeof payslipStatusEnum>;
//# sourceMappingURL=enums.d.ts.map