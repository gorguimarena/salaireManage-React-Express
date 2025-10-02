import { Decimal } from "@prisma/client/runtime/library";
import prisma from "../../config/database.js";
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
            const employees = await tx.employee.findMany({ where: { companyId, active: true } });
            // 3️⃣ Générer automatiquement les payslips
            const payslipsData = employees.map((emp) => ({
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
            },
        });
        if (!payRun)
            throw new Error("PayRun not found");
        // Récupérer tous les employés actifs
        const employees = await prisma.employee.findMany({
            where: { companyId, active: true },
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
            let gross = new Decimal(0);
            let daysWorked = null;
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
            else {
                gross = emp.salaryOrRate;
            }
            await prisma.payslip.upsert({
                where: { employeeId_payRunId: { employeeId: emp.id, payRunId } },
                update: { gross, netPay: gross, daysWorked },
                create: {
                    employeeId: emp.id,
                    payRunId,
                    gross,
                    netPay: gross,
                    daysWorked,
                },
            });
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
        // First, change status to APPROVED
        await prisma.payRun.update({
            where: { id: payRunId, companyId },
            data: { status: "APPROVED" },
        });
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