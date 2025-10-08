export interface CreateLoanInput {
    employeeId: string;
    amount: number;
    monthlyDeduction: number;
    description?: string;
}
export interface UpdateLoanInput {
    amount?: number;
    monthlyDeduction?: number;
    description?: string;
    status?: 'ACTIVE' | 'PAID' | 'CANCELLED';
}
export declare class LoanService {
    /**
     * Create a new loan for an employee
     */
    static createLoan(companyId: string, data: CreateLoanInput, createdBy: string): Promise<{
        employee: {
            fullName: string;
            position: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/index.js").$Enums.LoanStatus;
        startDate: Date;
        endDate: Date | null;
        employeeId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        remainingAmount: import("../../generated/runtime/library.js").Decimal;
        monthlyDeduction: import("../../generated/runtime/library.js").Decimal;
        progress: import("../../generated/runtime/library.js").Decimal;
        description: string | null;
        createdBy: string;
    }>;
    /**
     * Get all loans for a company
     */
    static getLoansByCompany(companyId: string, filters?: {
        employeeId?: string;
        status?: string;
    }): Promise<({
        employee: {
            fullName: string;
            position: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/index.js").$Enums.LoanStatus;
        startDate: Date;
        endDate: Date | null;
        employeeId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        remainingAmount: import("../../generated/runtime/library.js").Decimal;
        monthlyDeduction: import("../../generated/runtime/library.js").Decimal;
        progress: import("../../generated/runtime/library.js").Decimal;
        description: string | null;
        createdBy: string;
    })[]>;
    /**
     * Get loan by ID
     */
    static getLoanById(companyId: string, loanId: string): Promise<{
        employee: {
            fullName: string;
            position: string | null;
            id: string;
            companyId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/index.js").$Enums.LoanStatus;
        startDate: Date;
        endDate: Date | null;
        employeeId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        remainingAmount: import("../../generated/runtime/library.js").Decimal;
        monthlyDeduction: import("../../generated/runtime/library.js").Decimal;
        progress: import("../../generated/runtime/library.js").Decimal;
        description: string | null;
        createdBy: string;
    }>;
    /**
     * Update a loan
     */
    static updateLoan(companyId: string, loanId: string, data: UpdateLoanInput): Promise<{
        employee: {
            fullName: string;
            position: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/index.js").$Enums.LoanStatus;
        startDate: Date;
        endDate: Date | null;
        employeeId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        remainingAmount: import("../../generated/runtime/library.js").Decimal;
        monthlyDeduction: import("../../generated/runtime/library.js").Decimal;
        progress: import("../../generated/runtime/library.js").Decimal;
        description: string | null;
        createdBy: string;
    }>;
    /**
     * Delete a loan
     */
    static deleteLoan(companyId: string, loanId: string): Promise<void>;
    /**
     * Calculate loan deductions for payslip generation without modifying the loan itself.
     * This should be called when generating payslips.
     */
    static calculateLoanDeductions(employeeId: string): Promise<number>;
    /**
     * Apply loan deductions to the loan model when a payslip is paid.
     */
    static applyLoanDeductions(employeeId: string, amountPaid: number): Promise<void>;
    /**
     * Get active loans for an employee
     */
    static getActiveLoansForEmployee(employeeId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/index.js").$Enums.LoanStatus;
        startDate: Date;
        endDate: Date | null;
        employeeId: string;
        amount: import("../../generated/runtime/library.js").Decimal;
        remainingAmount: import("../../generated/runtime/library.js").Decimal;
        monthlyDeduction: import("../../generated/runtime/library.js").Decimal;
        progress: import("../../generated/runtime/library.js").Decimal;
        description: string | null;
        createdBy: string;
    }[]>;
}
//# sourceMappingURL=loan.service.d.ts.map