import { Router } from "express";
import { PaymentController } from "./payment.controller.js";
import { authenticate, authorize } from "../../middlewares/auth.js";
const router = Router();
router.use(authenticate);
router.get("/", authorize("ADMIN", "CASHIER", "SUPER_ADMIN"), PaymentController.list);
router.get("/:id", authorize("ADMIN", "CASHIER", "SUPER_ADMIN"), PaymentController.getById);
router.post("/", authorize("CASHIER"), PaymentController.create);
router.put("/:id", authorize("ADMIN", "SUPER_ADMIN"), PaymentController.update);
router.delete("/:id", authorize("ADMIN", "SUPER_ADMIN"), PaymentController.delete);
export default router;
//# sourceMappingURL=payment.routes.js.map