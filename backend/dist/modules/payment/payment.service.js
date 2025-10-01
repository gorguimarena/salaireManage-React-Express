import prisma from "../../config/database.js";
export class PaymentService {
    static async list(companyId) {
        return prisma.payment.findMany({
            where: {
                employee: { companyId }
            },
            include: {
                employee: true,
                payslip: true,
            },
            orderBy: { createdAt: "desc" },
        });
    }
    static async getById(companyId, id) {
        return prisma.payment.findUnique({
            where: { id },
            include: {
                employee: true,
                payslip: true,
            },
        });
    }
    static async create(companyId, data) {
        return prisma.payment.create({
            data,
            include: {
                employee: true,
                payslip: true,
            },
        });
    }
    static async update(companyId, id, data) {
        return prisma.payment.update({
            where: { id },
            data,
            include: {
                employee: true,
                payslip: true,
            },
        });
    }
    static async delete(companyId, id) {
        return prisma.payment.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=payment.service.js.map