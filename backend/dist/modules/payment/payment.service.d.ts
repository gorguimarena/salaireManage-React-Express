export declare class PaymentService {
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
        payslip: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        employeeId: string;
        payslipId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        mode: import("../../generated/index.js").$Enums.PaymentMode;
        note: string | null;
        receiptUrl: string | null;
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
        payslip: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        employeeId: string;
        payslipId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        mode: import("../../generated/index.js").$Enums.PaymentMode;
        note: string | null;
        receiptUrl: string | null;
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
        payslip: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        employeeId: string;
        payslipId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        mode: import("../../generated/index.js").$Enums.PaymentMode;
        note: string | null;
        receiptUrl: string | null;
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
        payslip: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        employeeId: string;
        payslipId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        mode: import("../../generated/index.js").$Enums.PaymentMode;
        note: string | null;
        receiptUrl: string | null;
    }>;
    static delete(companyId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        employeeId: string;
        payslipId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        mode: import("../../generated/index.js").$Enums.PaymentMode;
        note: string | null;
        receiptUrl: string | null;
    }>;
}
//# sourceMappingURL=payment.service.d.ts.map