import { Decimal } from "@prisma/client/runtime/library";
import prisma from "../../config/database.js";
import { LoanService } from "../loan/loan.service.js";
export class PayRunService {
    static async create(companyId, data) {
        return prisma.$transaction(async (tx) => {
            // 1️⃣ Créer le payrun
            const payRun = await tx.payRun.create({
                data: {
                    periodStart: new Date(data.periodStart),
                    periodEnd: new Date(data.periodEnd),
                    type: data.type,
                    status: "DRAFT", // Set default status as DRAFT
                    companyId,
                },
            });
            // 2️⃣ Récupérer tous les employés actifs
            const employees = await tx.user.findMany({
                where: {
                    companyId,
                    isActive: true,
                    contractType: { not: null } // Only users with employee data
                }
            });
            // 3️⃣ Générer automatiquement les payslips
            const payslipsData = employees
                .filter((emp) => emp.salaryOrRate) // Only employees with salary data
                .map((emp) => ({
                employeeId: emp.id,
                payRunId: payRun.id,
                gross: emp.salaryOrRate,
            }));
            await tx.payslip.createMany({ data: payslipsData });
            return payRun;
        });
    }
    static async list(companyId) {
        return prisma.payRun.findMany({
            where: { companyId },
            orderBy: { periodStart: "desc" },
            include: { payslips: true },
        });
    }
    static async generatePayslips(companyId, payRunId) {
        const payRun = await prisma.payRun.findUnique({
            where: { id: payRunId, companyId },
            include: {
                payslips: true,
                company: true,
            },
        });
        if (!payRun)
            throw new Error("PayRun not found");
        // Récupérer tous les employés actifs
        const employees = await prisma.user.findMany({
            where: {
                companyId,
                isActive: true,
                contractType: { not: null } // Only users with employee data
            },
            include: {
                workSchedules: {
                    where: {
                        startDate: { lte: payRun.periodEnd },
                        endDate: { gte: payRun.periodStart },
                    },
                    include: { attendances: true },
                },
            },
        });
        for (const emp of employees) {
            if (!emp.salaryOrRate)
                continue; // Skip if no salary data
            let gross = new Decimal(0);
            let daysWorked = null;
            let deductions = new Decimal(0);
            if (emp.contractType === "DAILY" || emp.contractType === "HOURLY") {
                daysWorked = 0;
                for (const ws of emp.workSchedules) {
                    for (const att of ws.attendances) {
                        if (att.date >= payRun.periodStart &&
                            att.date <= payRun.periodEnd &&
                            att.validated) {
                            daysWorked++;
                            if (emp.contractType === "HOURLY" && att.workedHours) {
                                gross = gross.plus(emp.salaryOrRate.mul(att.workedHours));
                            }
                            else if (emp.contractType === "DAILY") {
                                gross = gross.plus(emp.salaryOrRate);
                            }
                        }
                    }
                }
            }
            else if (emp.contractType === "FIXED") {
                // Calculate based on attendance for fixed salary
                daysWorked = 0;
                for (const ws of emp.workSchedules) {
                    for (const att of ws.attendances) {
                        if (att.date >= payRun.periodStart &&
                            att.date <= payRun.periodEnd &&
                            att.validated) {
                            daysWorked++;
                        }
                    }
                }
                const expectedDays = payRun.company.workDaysPerMonth || 22;
                const absentDays = Math.max(0, expectedDays - (daysWorked || 0));
                const deductionRate = new Decimal(payRun.company.fixedSalaryDeductionRate || 0);
                deductions = deductionRate.mul(absentDays);
                gross = emp.salaryOrRate.minus(deductions);
                gross = gross.greaterThan(0) ? gross : new Decimal(0);
            }
            else {
                // FEE
                gross = emp.salaryOrRate;
            }
            // Calculate loan deductions and apply them to update loan balances
            const loanDeductions = await LoanService.calculateLoanDeductions(emp.id);
            deductions = deductions.plus(loanDeductions);
            const netPay = gross.minus(deductions);
            // Only update payslips that are DRAFT or PENDING. Do not overwrite APPROVED or PAID payslips.
            const existingPayslip = payRun.payslips.find(p => p.employeeId === emp.id);
            if (existingPayslip && (existingPayslip.status === "APPROVED" || existingPayslip.status === "PAID")) {
                // Skip updating this payslip if it's already approved or paid
                continue;
            }
            await prisma.payslip.upsert({
                where: { employeeId_payRunId: { employeeId: emp.id, payRunId } },
                update: { gross, deductions, netPay, daysWorked, status: "PENDING" },
                create: {
                    employeeId: emp.id,
                    payRunId,
                    gross,
                    deductions,
                    netPay,
                    daysWorked,
                    status: "PENDING",
                },
            });
            // Apply loan deductions to update loan balances and progress
            await LoanService.applyLoanDeductions(emp.id, loanDeductions);
        }
        // Mettre le PayRun en APPROVED si tous les payslips créés
        await prisma.payRun.update({
            where: { id: payRunId, companyId },
            data: { status: "APPROVED" },
        });
        return { message: `Payslips generated for PayRun ${payRunId}` };
    }
    static async getById(companyId, payRunId) {
        return prisma.payRun.findUnique({
            where: { id: payRunId, companyId },
            include: { payslips: true },
        });
    }
    static async update(companyId, payRunId, data) {
        return prisma.payRun.update({
            where: { id: payRunId, companyId },
            data,
            include: { payslips: true },
        });
    }
    static async approve(companyId, payRunId) {
        // Then generate payslips
        return await PayRunService.generatePayslips(companyId, payRunId);
    }
    static async delete(companyId, payRunId) {
        return prisma.payRun.delete({
            where: { id: payRunId, companyId },
        });
    }
}
//# sourceMappingURL=payRun.service.js.map