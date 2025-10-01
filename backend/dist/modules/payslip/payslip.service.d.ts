export declare class PayslipService {
    static list(companyId: string): Promise<({
        employee: {
            contractType: import("../../generated/index.js").$Enums.ContractType;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal;
            bankDetails: string | null;
            email: string | null;
            phone: string | null;
            hireDate: Date | null;
            active: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
        };
        payRun: {
            type: import("../../generated/index.js").$Enums.PayRunType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
            periodStart: Date;
            periodEnd: Date;
            status: import("../../generated/index.js").$Enums.PayRunStatus;
        };
        payments: {
            id: string;
            createdAt: Date;
            employeeId: string;
            payslipId: string;
            amount: import("../../generated/runtime/library.js").Decimal;
            mode: import("../../generated/index.js").$Enums.PaymentMode;
            note: string | null;
            receiptUrl: string | null;
        }[];
    } & {
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
    })[]>;
    static getById(companyId: string, id: string): Promise<({
        employee: {
            contractType: import("../../generated/index.js").$Enums.ContractType;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal;
            bankDetails: string | null;
            email: string | null;
            phone: string | null;
            hireDate: Date | null;
            active: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
        };
        payRun: {
            type: import("../../generated/index.js").$Enums.PayRunType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
            periodStart: Date;
            periodEnd: Date;
            status: import("../../generated/index.js").$Enums.PayRunStatus;
        };
        payments: {
            id: string;
            createdAt: Date;
            employeeId: string;
            payslipId: string;
            amount: import("../../generated/runtime/library.js").Decimal;
            mode: import("../../generated/index.js").$Enums.PaymentMode;
            note: string | null;
            receiptUrl: string | null;
        }[];
    } & {
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
    }) | null>;
    static create(companyId: string, data: any): Promise<{
        employee: {
            contractType: import("../../generated/index.js").$Enums.ContractType;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal;
            bankDetails: string | null;
            email: string | null;
            phone: string | null;
            hireDate: Date | null;
            active: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
        };
        payRun: {
            type: import("../../generated/index.js").$Enums.PayRunType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
            periodStart: Date;
            periodEnd: Date;
            status: import("../../generated/index.js").$Enums.PayRunStatus;
        };
    } & {
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
    }>;
    static update(companyId: string, id: string, data: any): Promise<{
        employee: {
            contractType: import("../../generated/index.js").$Enums.ContractType;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal;
            bankDetails: string | null;
            email: string | null;
            phone: string | null;
            hireDate: Date | null;
            active: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
        };
        payRun: {
            type: import("../../generated/index.js").$Enums.PayRunType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
            periodStart: Date;
            periodEnd: Date;
            status: import("../../generated/index.js").$Enums.PayRunStatus;
        };
    } & {
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
    }>;
    static delete(companyId: string, id: string): Promise<{
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
    }>;
}
//# sourceMappingURL=payslip.service.d.ts.map