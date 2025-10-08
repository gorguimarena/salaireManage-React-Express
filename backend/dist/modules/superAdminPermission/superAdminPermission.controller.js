import { SuperAdminPermissionService } from "./superAdminPermission.service.js";
export class SuperAdminPermissionController {
    static async grantPermission(req, res) {
        try {
            const { superAdminId } = req.body;
            const companyId = req.user.companyId;
            const grantedBy = req.user.id;
            if (!superAdminId) {
                return res.status(400).json({ error: "superAdminId is required" });
            }
            const permission = await SuperAdminPermissionService.grantPermission(companyId, superAdminId, grantedBy);
            res.status(201).json(permission);
        }
        catch (error) {
            console.error("Error granting permission:", error);
            res.status(error.statusCode || 500).json({
                error: error.message || "Failed to grant permission"
            });
        }
    }
    static async revokePermission(req, res) {
        try {
            const { superAdminId } = req.params;
            const companyId = req.user.companyId;
            const revokedBy = req.user.id;
            if (!superAdminId) {
                return res.status(400).json({ error: "superAdminId is required" });
            }
            const result = await SuperAdminPermissionService.revokePermission(companyId, superAdminId, revokedBy);
            res.json(result);
        }
        catch (error) {
            console.error("Error revoking permission:", error);
            res.status(error.statusCode || 500).json({
                error: error.message || "Failed to revoke permission"
            });
        }
    }
    static async listGrantedPermissions(req, res) {
        try {
            const companyId = req.user.companyId;
            const userId = req.user.id;
            const permissions = await SuperAdminPermissionService.listGrantedPermissions(companyId, userId);
            res.json(permissions);
        }
        catch (error) {
            console.error("Error listing permissions:", error);
            res.status(error.statusCode || 500).json({
                error: error.message || "Failed to list permissions"
            });
        }
    }
    static async listSuperAdminPermissions(req, res) {
        try {
            const superAdminId = req.user.id;
            const permissions = await SuperAdminPermissionService.listSuperAdminPermissions(superAdminId);
            res.json(permissions);
        }
        catch (error) {
            console.error("Error listing super admin permissions:", error);
            res.status(error.statusCode || 500).json({
                error: error.message || "Failed to list permissions"
            });
        }
    }
    static async listAllSuperAdmins(req, res) {
        try {
            // Only company admins can see the list of super admins
            const user = req.user;
            if (user.role !== 'ADMIN') {
                return res.status(403).json({ error: "Only company admins can view super admins" });
            }
            const superAdmins = await SuperAdminPermissionService.listAllSuperAdmins();
            res.json(superAdmins);
        }
        catch (error) {
            console.error("Error listing super admins:", error);
            res.status(500).json({
                error: error.message || "Failed to list super admins"
            });
        }
    }
    static async checkPermission(req, res) {
        try {
            const { companyId } = req.params;
            const superAdminId = req.user.id;
            if (!companyId) {
                return res.status(400).json({ error: "Company ID is required" });
            }
            // Only super admins can check their own permissions
            const user = req.user;
            if (user.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ error: "Only super admins can check permissions" });
            }
            const hasPermission = await SuperAdminPermissionService.checkPermission(superAdminId, companyId);
            res.json({ hasPermission });
        }
        catch (error) {
            console.error("Error checking permission:", error);
            res.status(error.statusCode || 500).json({
                error: error.message || "Failed to check permission"
            });
        }
    }
}
//# sourceMappingURL=superAdminPermission.controller.js.map