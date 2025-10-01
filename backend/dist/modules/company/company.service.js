import prisma from "../../config/database.js";
import { hashPassword } from "../../utils/password.js";
export class CompanyService {
    static async createCompany(data) {
        const company = await prisma.company.create({
            data: {
                name: data.name,
                logoUrl: data.logoUrl ?? null,
                address: data.address ?? null,
                currency: data.currency,
                primaryColor: data.primaryColor,
                secondaryColor: data.secondaryColor,
            },
        });
        // Create admin user for the company
        const adminRole = await prisma.role.findUnique({
            where: { name: "ADMIN" },
        });
        if (adminRole) {
            const hashedPassword = await hashPassword(data.adminPassword);
            await prisma.user.create({
                data: {
                    email: data.adminEmail,
                    passwordHash: hashedPassword,
                    fullName: data.adminFullName,
                    companyId: company.id,
                    roleId: adminRole.id,
                },
            });
        }
        return company;
    }
    static async getAllCompanies() {
        return prisma.company.findMany({
            orderBy: { createdAt: "desc" },
        });
    }
    static async getCompanyById(id) {
        return prisma.company.findUnique({
            where: { id },
        });
    }
    static async updateCompany(id, data) {
        return prisma.company.update({
            where: { id },
            data,
        });
    }
    static async deleteCompany(id) {
        return prisma.company.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=company.service.js.map