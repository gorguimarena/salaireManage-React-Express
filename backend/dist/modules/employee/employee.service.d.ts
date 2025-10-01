import type { CreateWorkScheduleInput } from "../workSchedule/workSchedule.schema.js";
import type { CreateEmployeeInput } from "./employee.schema.js";
export type CreateEmployeAndWorkSchedule = {
    employee: CreateEmployeeInput;
    workSchedule?: CreateWorkScheduleInput | undefined;
};
export declare class EmployeeService {
    static create(companyId: string, data: CreateEmployeAndWorkSchedule): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal;
        bankDetails: string | null;
        email: string | null;
        phone: string | null;
        hireDate: Date | null;
        active: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
    }>;
    static list(companyId: string, filters?: {
        active?: boolean;
    }): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal;
        bankDetails: string | null;
        email: string | null;
        phone: string | null;
        hireDate: Date | null;
        active: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
    }[]>;
    static toggleActive(companyId: string, employeeId: string): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal;
        bankDetails: string | null;
        email: string | null;
        phone: string | null;
        hireDate: Date | null;
        active: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
    }>;
    static update(companyId: string, employeeId: string, data: any): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal;
        bankDetails: string | null;
        email: string | null;
        phone: string | null;
        hireDate: Date | null;
        active: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
    }>;
    static delete(companyId: string, employeeId: string): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal;
        bankDetails: string | null;
        email: string | null;
        phone: string | null;
        hireDate: Date | null;
        active: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
    }>;
}
//# sourceMappingURL=employee.service.d.ts.map