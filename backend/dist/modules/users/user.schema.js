import { z } from "zod";
export const registerSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one lowercase letter, one uppercase letter, and one number"),
    fullName: z.string().min(5, "Name is required"),
    companyId: z.string(),
    roleId: z.string(),
});
export const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
});
export const updateUserSchema = z.object({
    fullName: z.string().min(5, "Name is required").optional(),
    companyId: z.string().optional(),
    roleId: z.string().optional(),
    email: z.string().email("Invalid email format").optional(),
});
//# sourceMappingURL=user.schema.js.map