import { verifyToken } from "../utils/jwt.js";
import { env } from "../config/env.js";
import prisma from "../config/database.js";
import { AppError } from "../utils/AppError.js";
export const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies[env.COOKIE_NAME];
        if (!token) {
            throw new AppError("Authentication required", 401);
        }
        const decoded = verifyToken(token);
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            include: {
                company: true,
                role: true
            },
        });
        if (!user || !user.isActive) {
            throw new AppError("User not found or inactive", 401);
        }
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role.name,
            companyId: user.companyId == null ? null : user.companyId,
        };
        next();
    }
    catch (error) {
        next(error);
    }
};
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(new AppError("Authentication required", 401));
        }
        if (!roles.includes(req.user.role)) {
            return next(new AppError("Insufficient permissions", 403));
        }
        next();
    };
};
//# sourceMappingURL=auth.js.map