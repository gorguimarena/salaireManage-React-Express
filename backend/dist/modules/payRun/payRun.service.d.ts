import type { CreatePayRunInput } from "./payRun.schema.js";
export declare class PayRunService {
    static create(companyId: string, data: CreatePayRunInput): Promise<{
        type: import("../../generated/index.js").$Enums.PayRunType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        periodStart: Date;
        periodEnd: Date;
        status: import("../../generated/index.js").$Enums.PayRunStatus;
    }>;
    static list(companyId: string): Promise<({
        payslips: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../generated/index.js").$Enums.PayslipStatus;
            employeeId: string;
            payRunId: string;
            gross: import("../../generated/runtime/library.js").Decimal;
            deductions: import("../../generated/runtime/library.js").Decimal;
            netPay: import("../../generated/runtime/library.js").Decimal;
            daysWorked: number | null;
            lockedAt: Date | null;
        }[];
    } & {
        type: import("../../generated/index.js").$Enums.PayRunType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        periodStart: Date;
        periodEnd: Date;
        status: import("../../generated/index.js").$Enums.PayRunStatus;
    })[]>;
    static generatePayslips(companyId: string, payRunId: string): Promise<{
        message: string;
    }>;
    static getById(companyId: string, payRunId: string): Promise<({
        payslips: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../generated/index.js").$Enums.PayslipStatus;
            employeeId: string;
            payRunId: string;
            gross: import("../../generated/runtime/library.js").Decimal;
            deductions: import("../../generated/runtime/library.js").Decimal;
            netPay: import("../../generated/runtime/library.js").Decimal;
            daysWorked: number | null;
            lockedAt: Date | null;
        }[];
    } & {
        type: import("../../generated/index.js").$Enums.PayRunType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        periodStart: Date;
        periodEnd: Date;
        status: import("../../generated/index.js").$Enums.PayRunStatus;
    }) | null>;
    static update(companyId: string, payRunId: string, data: any): Promise<{
        payslips: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../generated/index.js").$Enums.PayslipStatus;
            employeeId: string;
            payRunId: string;
            gross: import("../../generated/runtime/library.js").Decimal;
            deductions: import("../../generated/runtime/library.js").Decimal;
            netPay: import("../../generated/runtime/library.js").Decimal;
            daysWorked: number | null;
            lockedAt: Date | null;
        }[];
    } & {
        type: import("../../generated/index.js").$Enums.PayRunType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        periodStart: Date;
        periodEnd: Date;
        status: import("../../generated/index.js").$Enums.PayRunStatus;
    }>;
    static delete(companyId: string, payRunId: string): Promise<{
        type: import("../../generated/index.js").$Enums.PayRunType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        periodStart: Date;
        periodEnd: Date;
        status: import("../../generated/index.js").$Enums.PayRunStatus;
    }>;
}
//# sourceMappingURL=payRun.service.d.ts.map