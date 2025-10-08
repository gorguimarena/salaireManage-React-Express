import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import employeeRoutes from "./modules/employee/employee.routes.js";
import companyRoutes from "./modules/company/company.routes.js";
import payRunRoutes from "./modules/payRun/payRun.routes.js";
import payslipRoutes from "./modules/payslip/payslip.routes.js";
import paymentRoutes from "./modules/payment/payment.routes.js";
import attendanceRoutes from "./modules/attendance/attendance.routes.js";
import qrAttendanceRoutes from "./modules/qrAttendance/qrAttendance.routes.js";
import loanRoutes from "./modules/loan/loan.routes.js";
import superAdminPermissionRoutes from "./modules/superAdminPermission/superAdminPermission.routes.js";
import { requestLogger } from "./middlewares/requestLogger.js";
import { generalLimiter, authLimiter } from "./middlewares/rateLimiter.js";
import { authenticate } from "./middlewares/auth.js";
import { userRoutes } from "./modules/users/user.routes.js";
const app = express();
app.use(cors({
    origin: process.env.NODE_ENV === "production"
        ? ["https://yourdomain.com"]
        : ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'x-company-id'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
}));
app.use(requestLogger);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
app.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
});
app.use("/api/users", userRoutes);
app.use(authenticate);
app.use("/api/employee", employeeRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/payrun", payRunRoutes);
app.use("/api/payslip", payslipRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/qr-attendance", qrAttendanceRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/permissions", superAdminPermissionRoutes);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
    });
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map