import { z } from "zod";
// Enum ContractType
export const contractTypeEnum = z.enum(["DAILY", "FIXED", "FEE", "HOURLY"]);
export const registerSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one lowercase letter, one uppercase letter, and one number"),
    fullName: z.string().min(5, "Name is required"),
    companyId: z.string().optional(), // Optional for super admins
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
    // Employee fields
    position: z.string().nullable().optional(),
    contractType: contractTypeEnum.optional(),
    salaryOrRate: z.number().positive("Salary or rate must be positive").optional(),
    bankDetails: z.string().nullable().optional(),
    active: z.boolean().optional(),
    phone: z.string().nullable().optional(),
    hireDate: z.string().nullable().optional(),
});
//# sourceMappingURL=user.schema.js.map