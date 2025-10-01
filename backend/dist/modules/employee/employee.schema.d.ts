import { z } from "zod";
export declare const contractTypeEnum: z.ZodEnum<{
    DAILY: "DAILY";
    FIXED: "FIXED";
    FEE: "FEE";
    HOURLY: "HOURLY";
}>;
export declare const createEmployeeSchema: z.ZodObject<{
    fullName: z.ZodString;
    position: z.ZodNullable<z.ZodString>;
    contractType: z.ZodEnum<{
        DAILY: "DAILY";
        FIXED: "FIXED";
        FEE: "FEE";
        HOURLY: "HOURLY";
    }>;
    salaryOrRate: z.ZodNumber;
    bankDetails: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    phone: z.ZodNullable<z.ZodString>;
    hireDate: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const updateEmployeeSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    position: z.ZodNullable<z.ZodString>;
    contractType: z.ZodOptional<z.ZodEnum<{
        DAILY: "DAILY";
        FIXED: "FIXED";
        FEE: "FEE";
        HOURLY: "HOURLY";
    }>>;
    salaryOrRate: z.ZodOptional<z.ZodNumber>;
    bankDetails: z.ZodNullable<z.ZodString>;
    active: z.ZodOptional<z.ZodBoolean>;
    email: z.ZodNullable<z.ZodString>;
    phone: z.ZodNullable<z.ZodString>;
    hireDate: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const employeeFilterSchema: z.ZodObject<{
    active: z.ZodOptional<z.ZodString>;
    position: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeeInput = z.infer<typeof updateEmployeeSchema>;
export type EmployeeFilterInput = z.infer<typeof employeeFilterSchema>;
//# sourceMappingURL=employee.schema.d.ts.map