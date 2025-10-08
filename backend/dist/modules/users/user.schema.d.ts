import { z } from "zod";
export declare const contractTypeEnum: z.ZodEnum<{
    DAILY: "DAILY";
    FIXED: "FIXED";
    FEE: "FEE";
    HOURLY: "HOURLY";
}>;
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    fullName: z.ZodString;
    companyId: z.ZodOptional<z.ZodString>;
    roleId: z.ZodString;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    companyId: z.ZodOptional<z.ZodString>;
    roleId: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    position: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contractType: z.ZodOptional<z.ZodEnum<{
        DAILY: "DAILY";
        FIXED: "FIXED";
        FEE: "FEE";
        HOURLY: "HOURLY";
    }>>;
    salaryOrRate: z.ZodOptional<z.ZodNumber>;
    bankDetails: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    active: z.ZodOptional<z.ZodBoolean>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hireDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
//# sourceMappingURL=user.schema.d.ts.map