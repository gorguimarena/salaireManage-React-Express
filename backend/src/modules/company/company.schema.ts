import { z } from "zod";

export const createCompanySchema = z.object({
  name: z.string().min(3, "Company name is required"),
  logoUrl: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  currency: z.string().default("Fcfa"),
  primaryColor: z.string().default("#1E40AF"),
  secondaryColor: z.string().default("#2563EB"),

  // Admin user data
  adminEmail: z.string().email("Valid email required"),
  adminPassword: z.string().min(8, "Password must be at least 8 characters"),
  adminFullName: z.string().min(2, "Full name is required"),
});

export type CreateCompanyInput = z.infer<typeof createCompanySchema>;
