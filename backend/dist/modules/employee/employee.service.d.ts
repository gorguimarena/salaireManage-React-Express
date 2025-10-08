import type { CreateWorkScheduleInput } from "../workSchedule/workSchedule.schema.js";
import type { CreateEmployeeInput } from "./employee.schema.js";
export type CreateEmployeAndWorkSchedule = {
    employee: CreateEmployeeInput;
    workSchedule?: CreateWorkScheduleInput | undefined;
};
export declare class EmployeeService {
    static create(companyId: string, data: CreateEmployeAndWorkSchedule): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType | null;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
        bankDetails: string | null;
        email: string;
        phone: string | null;
        hireDate: Date | null;
        active: boolean | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
        canValidateFully: boolean;
    }>;
    static list(companyId: string, filters?: {
        active?: boolean;
    }): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType | null;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
        bankDetails: string | null;
        email: string;
        phone: string | null;
        hireDate: Date | null;
        active: boolean | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
        canValidateFully: boolean;
    }[]>;
    static search(companyId: string, searchTerm: string, date?: Date, limit?: number): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType | null;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
        bankDetails: string | null;
        email: string;
        phone: string | null;
        hireDate: Date | null;
        active: boolean | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
        canValidateFully: boolean;
    }[]>;
    static toggleActive(companyId: string, employeeId: string): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType | null;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
        bankDetails: string | null;
        email: string;
        phone: string | null;
        hireDate: Date | null;
        active: boolean | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
        canValidateFully: boolean;
    }>;
    static update(companyId: string, employeeId: string, data: any): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType | null;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
        bankDetails: string | null;
        email: string;
        phone: string | null;
        hireDate: Date | null;
        active: boolean | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
        canValidateFully: boolean;
    }>;
    static delete(companyId: string, employeeId: string): Promise<{
        contractType: import("../../generated/index.js").$Enums.ContractType | null;
        fullName: string;
        position: string | null;
        salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
        bankDetails: string | null;
        email: string;
        phone: string | null;
        hireDate: Date | null;
        active: boolean | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
        canValidateFully: boolean;
    }>;
    static markAttendanceManual(employeeId: string, markedByUserId: string): Promise<{
        attendanceId: string;
    }>;
}
//# sourceMappingURL=employee.service.d.ts.map