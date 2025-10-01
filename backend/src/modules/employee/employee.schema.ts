import { z } from "zod";

// Enum ContractType
export const contractTypeEnum = z.enum(["DAILY", "FIXED", "FEE", "HOURLY"]);

// Schéma pour créer un employé
export const createEmployeeSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  position: z.string().nullable(),
  contractType: contractTypeEnum,
  salaryOrRate: z.number().positive("Salary or rate must be positive"),
  bankDetails: z.string().nullable(),
  email: z.string().email().nullable(),
  phone: z.string().nullable(),
  hireDate: z.string().nullable(),
});

// Schéma pour mettre à jour un employé
export const updateEmployeeSchema = z.object({
  fullName: z.string().min(2, "Full name is required").optional(),
  position: z.string().nullable(),
  contractType: contractTypeEnum.optional(),
  salaryOrRate: z.number().positive("Salary or rate must be positive").optional(),
  bankDetails: z.string().nullable(),
  active: z.boolean().optional(),
  email: z.string().email().nullable(),
  phone: z.string().nullable(),
  hireDate: z.string().nullable(),
});

// Query params pour filtrage
export const employeeFilterSchema = z.object({
  active: z.string().optional(),
  position: z.string().optional(),
});

// Types TypeScript basés sur Zod
export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeeInput = z.infer<typeof updateEmployeeSchema>;
export type EmployeeFilterInput = z.infer<typeof employeeFilterSchema>;
