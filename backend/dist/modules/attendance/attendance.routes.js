import { Router } from "express";
import { AttendanceController } from "./attendance.controller.js";
import { authenticate, authorize } from "../../middlewares/auth.js";
const router = Router();
router.use(authenticate);
router.post("/", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), AttendanceController.create);
router.get("/employee/:employeeId", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), AttendanceController.listByEmployee);
router.get("/", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), AttendanceController.listByCompany);
router.get("/today", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), AttendanceController.getTodayAttendances);
router.get("/pending", authorize("ADMIN", "SUPER_ADMIN"), AttendanceController.getPendingAttendances);
router.put("/:id", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), AttendanceController.update);
router.post("/:id/validate", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), AttendanceController.validate);
router.post("/:id/validate-hours", authorize("ADMIN", "SUPER_ADMIN"), AttendanceController.validateAttendanceWithHours);
router.post("/bulk", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), AttendanceController.bulkCreate);
router.post("/daily", authorize("VIGILE", "ADMIN", "SUPER_ADMIN"), AttendanceController.markDailyAttendance);
export default router;
//# sourceMappingURL=attendance.routes.js.map