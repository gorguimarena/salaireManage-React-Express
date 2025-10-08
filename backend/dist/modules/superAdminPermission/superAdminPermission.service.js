import prisma from "../../config/database.js";
import { AppError } from "../../utils/AppError.js";
export class SuperAdminPermissionService {
    static async grantPermission(companyId, superAdminId, grantedBy) {
        // Verify that the granter is an admin of the company
        const granter = await prisma.user.findUnique({
            where: { id: grantedBy },
            include: { role: true }
        });
        if (!granter || granter.companyId !== companyId || granter.role.name !== 'ADMIN') {
            throw new AppError("Only company admins can grant permissions", 403);
        }
        // Verify that the target user is a super admin
        const superAdmin = await prisma.user.findUnique({
            where: { id: superAdminId },
            include: { role: true }
        });
        if (!superAdmin || superAdmin.role.name !== 'SUPER_ADMIN') {
            throw new AppError("Target user must be a super admin", 400);
        }
        // Check if permission already exists
        const existingPermission = await prisma.superAdminPermission.findUnique({
            where: {
                superAdminId_companyId: {
                    superAdminId,
                    companyId
                }
            }
        });
        if (existingPermission) {
            throw new AppError("Permission already granted", 409);
        }
        return prisma.superAdminPermission.create({
            data: {
                superAdminId,
                companyId,
                grantedBy
            },
            include: {
                superAdmin: {
                    select: { id: true, fullName: true, email: true }
                },
                company: {
                    select: { id: true, name: true }
                }
            }
        });
    }
    static async revokePermission(companyId, superAdminId, revokedBy) {
        // Verify that the revoker is an admin of the company
        const revoker = await prisma.user.findUnique({
            where: { id: revokedBy },
            include: { role: true }
        });
        if (!revoker || revoker.companyId !== companyId || revoker.role.name !== 'ADMIN') {
            throw new AppError("Only company admins can revoke permissions", 403);
        }
        const permission = await prisma.superAdminPermission.findUnique({
            where: {
                superAdminId_companyId: {
                    superAdminId,
                    companyId
                }
            }
        });
        if (!permission) {
            throw new AppError("Permission not found", 404);
        }
        await prisma.superAdminPermission.delete({
            where: {
                superAdminId_companyId: {
                    superAdminId,
                    companyId
                }
            }
        });
        return { message: "Permission revoked successfully" };
    }
    static async listGrantedPermissions(companyId, userId) {
        // Verify that the requester is an admin of the company
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { role: true }
        });
        if (!user || user.companyId !== companyId || user.role.name !== 'ADMIN') {
            throw new AppError("Only company admins can view permissions", 403);
        }
        return prisma.superAdminPermission.findMany({
            where: { companyId },
            include: {
                superAdmin: {
                    select: { id: true, fullName: true, email: true }
                }
            },
            orderBy: { grantedAt: 'desc' }
        });
    }
    static async listSuperAdminPermissions(superAdminId) {
        // Verify that the requester is the super admin
        const user = await prisma.user.findUnique({
            where: { id: superAdminId },
            include: { role: true }
        });
        if (!user || user.role.name !== 'SUPER_ADMIN') {
            throw new AppError("Only super admins can view their permissions", 403);
        }
        return prisma.superAdminPermission.findMany({
            where: { superAdminId },
            include: {
                company: {
                    select: { id: true, name: true, logoUrl: true }
                }
            },
            orderBy: { grantedAt: 'desc' }
        });
    }
    static async checkPermission(superAdminId, companyId) {
        const permission = await prisma.superAdminPermission.findUnique({
            where: {
                superAdminId_companyId: {
                    superAdminId,
                    companyId
                }
            }
        });
        return !!permission;
    }
    static async listAllSuperAdmins() {
        return prisma.user.findMany({
            where: {
                role: { name: 'SUPER_ADMIN' }
            },
            select: {
                id: true,
                fullName: true,
                email: true
            },
            orderBy: { fullName: 'asc' }
        });
    }
}
//# sourceMappingURL=superAdminPermission.service.js.map