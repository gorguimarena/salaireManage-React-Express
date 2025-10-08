import { Router } from "express";
import { EmployeeController } from "./employee.controller.js";
import { authenticate, authorize } from "../../middlewares/auth.js";

const router = Router();

router.use(authenticate);

// Routes pour tous les utilisateurs authentifiés de l'entreprise
router.get("/", authorize("ADMIN", "CASHIER", "SUPER_ADMIN", "VIGILE"), EmployeeController.list);
router.get("/search", authorize("ADMIN", "CASHIER", "SUPER_ADMIN", "VIGILE"), EmployeeController.search);

// Routes Admin uniquement
router.post("/", authorize("ADMIN", "SUPER_ADMIN"), EmployeeController.create);
router.put("/:id", authorize("ADMIN", "SUPER_ADMIN"), EmployeeController.update);
router.delete("/:id", authorize("ADMIN", "SUPER_ADMIN"), EmployeeController.delete);
router.patch("/:id/toggle-active", authorize("ADMIN", "SUPER_ADMIN"), EmployeeController.toggleActive);

// Routes Vigile pour marquage manuel
router.post("/:id/mark-attendance", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), EmployeeController.markAttendanceManual);

export default router;
