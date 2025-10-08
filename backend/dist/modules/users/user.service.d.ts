import type { RegisterInput, LoginInput, UpdateUserInput } from "./user.schema.js";
export declare class UserService {
    static register(data: RegisterInput): Promise<{
        user: {
            contractType: import("../../generated/index.js").$Enums.ContractType | null;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
            bankDetails: string | null;
            email: string;
            phone: string | null;
            hireDate: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string | null;
            isActive: boolean;
            roleId: string;
            role: {
                name: import("../../generated/index.js").$Enums.RoleType;
                id: string;
            };
        };
    }>;
    static login(data: LoginInput): Promise<{
        user: {
            role: import("../../generated/index.js").$Enums.RoleType;
            contractType: import("../../generated/index.js").$Enums.ContractType | null;
            fullName: string;
            position: string | null;
            salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
            bankDetails: string | null;
            email: string;
            phone: string | null;
            hireDate: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string | null;
            isActive: boolean;
            roleId: string;
        };
        token: string;
    }>;
    static updateUser(id: string, data: UpdateUserInput): Promise<{
        company: {
            name: string;
            id: string;
            logoUrl: string | null;
            address: string | null;
            currency: string;
            primaryColor: string;
            secondaryColor: string;
            fixedSalaryDeductionRate: import("../../generated/runtime/library.js").Decimal | null;
            workDaysPerMonth: number | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        role: {
            name: import("../../generated/index.js").$Enums.RoleType;
            id: string;
        };
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
        isActive: boolean;
        roleId: string;
        canValidateFully: boolean;
    }>;
    static getAllUsers(): Promise<({
        company: {
            name: string;
            id: string;
            logoUrl: string | null;
            address: string | null;
            currency: string;
            primaryColor: string;
            secondaryColor: string;
            fixedSalaryDeductionRate: import("../../generated/runtime/library.js").Decimal | null;
            workDaysPerMonth: number | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        role: {
            name: import("../../generated/index.js").$Enums.RoleType;
            id: string;
        };
    } & {
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
    })[]>;
    static getUserById(id: string): Promise<{
        company: {
            name: string;
            id: string;
            logoUrl: string | null;
            address: string | null;
            currency: string;
            primaryColor: string;
            secondaryColor: string;
            fixedSalaryDeductionRate: import("../../generated/runtime/library.js").Decimal | null;
            workDaysPerMonth: number | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        role: {
            name: import("../../generated/index.js").$Enums.RoleType;
            id: string;
        };
    } & {
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
    static deleteUser(id: string): Promise<void>;
    static getUsersByCompany(companyId: string): Promise<({
        company: {
            name: string;
            id: string;
            logoUrl: string | null;
            address: string | null;
            currency: string;
            primaryColor: string;
            secondaryColor: string;
            fixedSalaryDeductionRate: import("../../generated/runtime/library.js").Decimal | null;
            workDaysPerMonth: number | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        role: {
            name: import("../../generated/index.js").$Enums.RoleType;
            id: string;
        };
    } & {
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
    })[]>;
    static getRoles(): Promise<{
        name: import("../../generated/index.js").$Enums.RoleType;
        id: string;
    }[]>;
}
//# sourceMappingURL=user.service.d.ts.map