import { Router } from "express";
import { PayslipController } from "./payslip.controller.js";
import { authenticate, authorize } from "../../middlewares/auth.js";
const router = Router();
router.use(authenticate);
router.get("/", authorize("ADMIN", "CASHIER", "SUPER_ADMIN"), PayslipController.list);
router.get("/:id", authorize("ADMIN", "CASHIER"), PayslipController.getById);
router.post("/", authorize("ADMIN"), PayslipController.create);
router.put("/:id", authorize("ADMIN"), PayslipController.update);
router.delete("/:id", authorize("ADMIN"), PayslipController.delete);
export default router;
//# sourceMappingURL=payslip.routes.js.map