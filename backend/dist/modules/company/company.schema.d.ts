import { z } from "zod";
export declare const createCompanySchema: z.ZodObject<{
    name: z.ZodString;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodString>;
    primaryColor: z.ZodDefault<z.ZodString>;
    secondaryColor: z.ZodDefault<z.ZodString>;
    adminEmail: z.ZodString;
    adminPassword: z.ZodString;
    adminFullName: z.ZodString;
}, z.core.$strip>;
export type CreateCompanyInput = z.infer<typeof createCompanySchema>;
//# sourceMappingURL=company.schema.d.ts.map