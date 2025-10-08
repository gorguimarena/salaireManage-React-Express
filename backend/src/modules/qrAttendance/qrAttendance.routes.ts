import { Router } from "express";
import { QRAttendanceController } from "./qrAttendance.controller.js";
import { authenticate, authorize } from "../../middlewares/auth.js";

const router = Router();

// All routes require authentication
router.use(authenticate);

// Employee routes
router.get("/generate", authorize("ADMIN", "CASHIER", "VIGILE"), QRAttendanceController.generateQRCode);
router.get("/current", authorize("ADMIN", "CASHIER", "VIGILE"), QRAttendanceController.getCurrentQRCode);

// Vigile routes
router.post("/validate", authorize("VIGILE"), QRAttendanceController.validateQRCode);

export default router;