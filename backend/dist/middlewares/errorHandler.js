import { AppError } from "../utils/AppError.js";
import { logger } from "../utils/logger.js";
import { env } from "../config/env.js";
export const errorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let message = "Internal server error";
    let details = undefined;
    // Log error
    logger.error("Error occurred:", {
        message: error.message,
        stack: error.stack,
        url: req.url,
        method: req.method,
        body: req.body,
        user: req.user?.id,
    });
    // Handle different error types
    if (error instanceof AppError) {
        statusCode = error.statusCode;
        message = error.message;
        // } else if (error instanceof ZodError) {
        //   statusCode = 400
        //   message = "Validation error"
        //   details = error.errors.map((err) => ({
        //     field: err.path.join("."),
        //     message: err.message,
        //   }))
        // } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
        //   switch (error.code) {
        //     case "P2002":
        //       statusCode = 409
        //       message = "Resource already exists"
        //       details = `Duplicate value for field: ${error.meta?.target}`
        //       break
        //     case "P2025":
        //       statusCode = 404
        //       message = "Resource not found"
        //       break
        //     case "P2003":
        //       statusCode = 400
        //       message = "Foreign key constraint failed"
        //       break
        //     default:
        //       statusCode = 400
        //       message = "Database error"
        //       if (env.NODE_ENV === "development") {
        //         details = error.message
        //       }
        //   }
        // } else if (error instanceof Prisma.PrismaClientValidationError) {
        //   statusCode = 400
        //   message = "Invalid data provided"
        //   if (env.NODE_ENV === "development") {
        //     details = error.message
        //   }
        // } else if (error instanceof JsonWebTokenError) {
        statusCode = 401;
        message = "Invalid token";
        // } else if (error instanceof TokenExpiredError) {
        //   statusCode = 401
        //   message = "Token expired"
        // } else if (error.name === "CastError") {
        statusCode = 400;
        message = "Invalid ID format";
    }
    const errorResponse = {
        success: false,
        message,
    };
    // Add error details in development
    if (env.NODE_ENV === "development") {
        errorResponse.error = error.message;
        if (details) {
            errorResponse.details = details;
        }
    }
    res.status(statusCode).json(errorResponse);
};
//# sourceMappingURL=errorHandler.js.map