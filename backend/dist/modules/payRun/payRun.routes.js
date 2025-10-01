import { Router } from "express";
import { PayRunController } from "./payRun.controller.js";
import { authenticate, authorize } from "../../middlewares/auth.js";
const router = Router();
router.use(authenticate);
// Routes pour tous les utilisateurs authentifiés de l'entreprise
router.get("/", authorize("ADMIN", "CASHIER", "SUPER_ADMIN"), PayRunController.list);
// Routes Admin uniquement
router.post("/", authorize("ADMIN", "SUPER_ADMIN"), PayRunController.create);
router.get("/:id", authorize("ADMIN", "SUPER_ADMIN"), PayRunController.getById);
router.put("/:id", authorize("ADMIN", "SUPER_ADMIN"), PayRunController.update);
router.delete("/:id", authorize("ADMIN", "SUPER_ADMIN"), PayRunController.delete);
router.post("/:id/generate-payslips", authorize("ADMIN", "SUPER_ADMIN"), PayRunController.generatePayslips);
export default router;
//# sourceMappingURL=payRun.routes.js.map