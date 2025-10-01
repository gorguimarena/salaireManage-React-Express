import prisma from "../../config/database.js";

export class PaymentService {
  static async list(companyId: string) {
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

  static async getById(companyId: string, id: string) {
    return prisma.payment.findUnique({
      where: { id },
      include: {
        employee: true,
        payslip: true,
      },
    });
  }

  static async create(companyId: string, data: any) {
    return prisma.payment.create({
      data,
      include: {
        employee: true,
        payslip: true,
      },
    });
  }

  static async update(companyId: string, id: string, data: any) {
    return prisma.payment.update({
      where: { id },
      data,
      include: {
        employee: true,
        payslip: true,
      },
    });
  }

  static async delete(companyId: string, id: string) {
    return prisma.payment.delete({
      where: { id },
    });
  }
}
