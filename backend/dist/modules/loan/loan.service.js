import prisma from "../../config/database.js";
import { AppError } from "../../utils/AppError.js";
export class LoanService {
    /**
     * Create a new loan for an employee
     */
    static async createLoan(companyId, data, createdBy) {
        // Verify employee belongs to company
        const employee = await prisma.user.findUnique({
            where: { id: data.employeeId },
            select: { companyId: true, fullName: true }
        });
        if (!employee || employee.companyId !== companyId) {
            throw new AppError('Employee not found or access denied', 403);
        }
        // Calculate end date based on monthly deduction
        const monthsToPay = Math.ceil(data.amount / data.monthlyDeduction);
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + monthsToPay);
        const loan = await prisma.loan.create({
            data: {
                employeeId: data.employeeId,
                amount: data.amount,
                remainingAmount: data.amount,
                monthlyDeduction: data.monthlyDeduction,
                description: data.description || null,
                endDate,
                createdBy
            },
            include: {
                employee: {
                    select: {
                        id: true,
                        fullName: true,
                        position: true
                    }
                }
            }
        });
        return loan;
    }
    /**
     * Get all loans for a company
     */
    static async getLoansByCompany(companyId, filters) {
        const where = {
            employee: {
                companyId
            }
        };
        if (filters?.employeeId) {
            where.employeeId = filters.employeeId;
        }
        if (filters?.status) {
            where.status = filters.status;
        }
        return prisma.loan.findMany({
            where,
            include: {
                employee: {
                    select: {
                        id: true,
                        fullName: true,
                        position: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }
    /**
     * Get loan by ID
     */
    static async getLoanById(companyId, loanId) {
        const loan = await prisma.loan.findUnique({
            where: { id: loanId },
            include: {
                employee: {
                    select: {
                        id: true,
                        fullName: true,
                        position: true,
                        companyId: true
                    }
                }
            }
        });
        if (!loan || loan.employee.companyId !== companyId) {
            throw new AppError('Loan not found or access denied', 404);
        }
        return loan;
    }
    /**
     * Update a loan
     */
    static async updateLoan(companyId, loanId, data) {
        // First verify access
        await this.getLoanById(companyId, loanId);
        const updateData = {};
        if (data.amount !== undefined)
            updateData.amount = data.amount;
        if (data.monthlyDeduction !== undefined)
            updateData.monthlyDeduction = data.monthlyDeduction;
        if (data.description !== undefined)
            updateData.description = data.description;
        if (data.status !== undefined)
            updateData.status = data.status;
        // Recalculate end date if amount or monthly deduction changed
        if (data.amount !== undefined || data.monthlyDeduction !== undefined) {
            const loan = await prisma.loan.findUnique({ where: { id: loanId } });
            if (loan) {
                const newAmount = Number(data.amount ?? loan.amount);
                const newDeduction = Number(data.monthlyDeduction ?? loan.monthlyDeduction);
                const monthsToPay = Math.ceil(newAmount / newDeduction);
                const endDate = new Date();
                endDate.setMonth(endDate.getMonth() + monthsToPay);
                updateData.endDate = endDate;
            }
        }
        return prisma.loan.update({
            where: { id: loanId },
            data: updateData,
            include: {
                employee: {
                    select: {
                        id: true,
                        fullName: true,
                        position: true
                    }
                }
            }
        });
    }
    /**
     * Delete a loan
     */
    static async deleteLoan(companyId, loanId) {
        // First verify access
        await this.getLoanById(companyId, loanId);
        await prisma.loan.delete({
            where: { id: loanId }
        });
    }
    /**
     * Calculate loan deductions for payslip generation without modifying the loan itself.
     * This should be called when generating payslips.
     */
    static async calculateLoanDeductions(employeeId) {
        const activeLoans = await prisma.loan.findMany({
            where: {
                employeeId,
                status: 'ACTIVE',
                remainingAmount: { gt: 0 }
            }
        });
        let totalDeduction = 0;
        for (const loan of activeLoans) {
            const deduction = Math.min(Number(loan.monthlyDeduction), Number(loan.remainingAmount));
            totalDeduction += deduction;
        }
        return totalDeduction;
    }
    /**
     * Apply loan deductions to the loan model when a payslip is paid.
     */
    static async applyLoanDeductions(employeeId, amountPaid) {
        const activeLoans = await prisma.loan.findMany({
            where: {
                employeeId,
                status: 'ACTIVE',
                remainingAmount: { gt: 0 }
            },
            orderBy: { createdAt: 'asc' } // Deduct from older loans first
        });
        let remainingAmountToDeduct = amountPaid;
        for (const loan of activeLoans) {
            if (remainingAmountToDeduct <= 0)
                break;
            const deductionForThisLoan = Math.min(Number(loan.monthlyDeduction), Number(loan.remainingAmount), remainingAmountToDeduct);
            const newRemaining = Number(loan.remainingAmount) - deductionForThisLoan;
            const newStatus = newRemaining <= 0 ? 'PAID' : 'ACTIVE';
            await prisma.loan.update({
                where: { id: loan.id },
                data: {
                    remainingAmount: Math.max(0, newRemaining),
                    status: newStatus
                }
            });
            remainingAmountToDeduct -= deductionForThisLoan;
        }
    }
    /**
     * Get active loans for an employee
     */
    static async getActiveLoansForEmployee(employeeId) {
        return prisma.loan.findMany({
            where: {
                employeeId,
                status: 'ACTIVE',
                remainingAmount: { gt: 0 }
            },
            orderBy: { createdAt: 'asc' }
        });
    }
}
//# sourceMappingURL=loan.service.js.map