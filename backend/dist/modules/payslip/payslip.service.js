import prisma from "../../config/database.js";
export class PayslipService {
    static async list(companyId, userRole) {
        const whereCondition = {
            payRun: { companyId }
        };
        // For CASHIER, only show payslips from APPROVED payruns
        if (userRole === 'CASHIER') {
            whereCondition.payRun = {
                companyId,
                status: 'APPROVED'
            };
        }
        return prisma.payslip.findMany({
            where: whereCondition,
            include: {
                employee: true,
                payRun: true,
                payments: true,
            },
            orderBy: { createdAt: "desc" },
        });
    }
    static async getById(companyId, id) {
        return prisma.payslip.findUnique({
            where: { id },
            include: {
                employee: true,
                payRun: true,
                payments: true,
            },
        });
    }
    static async create(companyId, data) {
        return prisma.payslip.create({
            data,
            include: {
                employee: true,
                payRun: true,
            },
        });
    }
    static async update(companyId, id, data) {
        return prisma.payslip.update({
            where: { id },
            data,
            include: {
                employee: true,
                payRun: true,
            },
        });
    }
    static async delete(companyId, id) {
        return prisma.payslip.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=payslip.service.js.map