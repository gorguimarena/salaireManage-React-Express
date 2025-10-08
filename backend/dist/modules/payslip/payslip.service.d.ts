export declare class PayslipService {
    static list(companyId: string, userRole?: string): Promise<({
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
            amount: import("../../generated/runtime/library.js").Decimal;
            payslipId: string;
            mode: import("../../generated/index.js").$Enums.PaymentMode;
            note: string | null;
            receiptUrl: string | null;
        }[];
        employee: {
            contractType: import("../../generated/index.js").$Enums.ContractType | null;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
            bankDetails: string | null;
            email: string;
            phone: string | null;
            hireDate: Date | null;
            active: boolean | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string | null;
            passwordHash: string;
            isActive: boolean;
            roleId: string;
            canValidateFully: boolean;
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
    })[]>;
    static getById(companyId: string, id: string): Promise<({
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
            amount: import("../../generated/runtime/library.js").Decimal;
            payslipId: string;
            mode: import("../../generated/index.js").$Enums.PaymentMode;
            note: string | null;
            receiptUrl: string | null;
        }[];
        employee: {
            contractType: import("../../generated/index.js").$Enums.ContractType | null;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
            bankDetails: string | null;
            email: string;
            phone: string | null;
            hireDate: Date | null;
            active: boolean | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string | null;
            passwordHash: string;
            isActive: boolean;
            roleId: string;
            canValidateFully: boolean;
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
    }) | null>;
    static create(companyId: string, data: any): Promise<{
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
        employee: {
            contractType: import("../../generated/index.js").$Enums.ContractType | null;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
            bankDetails: string | null;
            email: string;
            phone: string | null;
            hireDate: Date | null;
            active: boolean | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string | null;
            passwordHash: string;
            isActive: boolean;
            roleId: string;
            canValidateFully: boolean;
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
        employee: {
            contractType: import("../../generated/index.js").$Enums.ContractType | null;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
            bankDetails: string | null;
            email: string;
            phone: string | null;
            hireDate: Date | null;
            active: boolean | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string | null;
            passwordHash: string;
            isActive: boolean;
            roleId: string;
            canValidateFully: boolean;
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