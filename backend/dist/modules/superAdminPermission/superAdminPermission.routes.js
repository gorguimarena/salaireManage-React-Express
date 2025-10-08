import { Router } from "express";
import { SuperAdminPermissionController } from "./superAdminPermission.controller.js";
import { authenticate, authorize } from "../../middlewares/auth.js";
const router = Router();
router.use(authenticate);
// Routes for company admins to manage permissions
router.post("/grant", authorize("ADMIN"), SuperAdminPermissionController.grantPermission);
router.delete("/:superAdminId", authorize("ADMIN"), SuperAdminPermissionController.revokePermission);
router.get("/granted", authorize("ADMIN"), SuperAdminPermissionController.listGrantedPermissions);
router.get("/super-admins", authorize("ADMIN"), SuperAdminPermissionController.listAllSuperAdmins);
// Routes for super admins to view their permissions
router.get("/my-permissions", authorize("SUPER_ADMIN"), SuperAdminPermissionController.listSuperAdminPermissions);
router.get("/check/:companyId", authorize("SUPER_ADMIN"), SuperAdminPermissionController.checkPermission);
export default router;
//# sourceMappingURL=superAdminPermission.routes.js.map