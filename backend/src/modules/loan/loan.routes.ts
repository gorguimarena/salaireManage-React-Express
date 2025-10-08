import { Router } from "express";
import { LoanController } from "./loan.controller.js";
import { authenticate, authorize } from "../../middlewares/auth.js";

const router = Router();


// Routes for admins only
router.post("/", authorize("ADMIN", "SUPER_ADMIN"), LoanController.create);
router.get("/", authorize("ADMIN", "SUPER_ADMIN"), LoanController.getAll);
router.get("/:id", authorize("ADMIN", "SUPER_ADMIN"), LoanController.getById);
router.put("/:id", authorize("ADMIN", "SUPER_ADMIN"), LoanController.update);
router.delete("/:id", authorize("ADMIN", "SUPER_ADMIN"), LoanController.delete);

// Get active loans for an employee (accessible by admin and the employee themselves)
router.get("/employee/:employeeId/active", authorize("ADMIN", "SUPER_ADMIN"), LoanController.getEmployeeLoans);

export default router;