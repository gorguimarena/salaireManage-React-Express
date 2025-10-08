import type { Request, Response } from "express";
import { SuperAdminPermissionService } from "./superAdminPermission.service.js";

export class SuperAdminPermissionController {
  static async grantPermission(req: Request, res: Response) {
    try {
      const { superAdminId } = req.body;
      const companyId = (req as any).user.companyId;
      const grantedBy = (req as any).user.id;

      if (!superAdminId) {
        return res.status(400).json({ error: "superAdminId is required" });
      }

      const permission = await SuperAdminPermissionService.grantPermission(
        companyId,
        superAdminId,
        grantedBy
      );

      res.status(201).json(permission);
    } catch (error: any) {
      console.error("Error granting permission:", error);
      res.status(error.statusCode || 500).json({
        error: error.message || "Failed to grant permission"
      });
    }
  }

  static async revokePermission(req: Request, res: Response) {
    try {
      const { superAdminId } = req.params;
      const companyId = (req as any).user.companyId;
      const revokedBy = (req as any).user.id;

      if (!superAdminId) {
        return res.status(400).json({ error: "superAdminId is required" });
      }

      const result = await SuperAdminPermissionService.revokePermission(
        companyId,
        superAdminId,
        revokedBy
      );

      res.json(result);
    } catch (error: any) {
      console.error("Error revoking permission:", error);
      res.status(error.statusCode || 500).json({
        error: error.message || "Failed to revoke permission"
      });
    }
  }

  static async listGrantedPermissions(req: Request, res: Response) {
    try {
      const companyId = (req as any).user.companyId;
      const userId = (req as any).user.id;

      const permissions = await SuperAdminPermissionService.listGrantedPermissions(
        companyId,
        userId
      );

      res.json(permissions);
    } catch (error: any) {
      console.error("Error listing permissions:", error);
      res.status(error.statusCode || 500).json({
        error: error.message || "Failed to list permissions"
      });
    }
  }

  static async listSuperAdminPermissions(req: Request, res: Response) {
    try {
      const superAdminId = (req as any).user.id;

      const permissions = await SuperAdminPermissionService.listSuperAdminPermissions(
        superAdminId
      );

      res.json(permissions);
    } catch (error: any) {
      console.error("Error listing super admin permissions:", error);
      res.status(error.statusCode || 500).json({
        error: error.message || "Failed to list permissions"
      });
    }
  }

  static async listAllSuperAdmins(req: Request, res: Response) {
    try {
      // Only company admins can see the list of super admins
      const user = (req as any).user;
      if (user.role !== 'ADMIN') {
        return res.status(403).json({ error: "Only company admins can view super admins" });
      }

      const superAdmins = await SuperAdminPermissionService.listAllSuperAdmins();
      res.json(superAdmins);
    } catch (error: any) {
      console.error("Error listing super admins:", error);
      res.status(500).json({
        error: error.message || "Failed to list super admins"
      });
    }
  }

  static async checkPermission(req: Request, res: Response) {
    try {
      const { companyId } = req.params;
      const superAdminId = (req as any).user.id;

      if (!companyId) {
        return res.status(400).json({ error: "Company ID is required" });
      }

      // Only super admins can check their own permissions
      const user = (req as any).user;
      if (user.role !== 'SUPER_ADMIN') {
        return res.status(403).json({ error: "Only super admins can check permissions" });
      }

      const hasPermission = await SuperAdminPermissionService.checkPermission(
        superAdminId,
        companyId
      );

      res.json({ hasPermission });
    } catch (error: any) {
      console.error("Error checking permission:", error);
      res.status(error.statusCode || 500).json({
        error: error.message || "Failed to check permission"
      });
    }
  }
}