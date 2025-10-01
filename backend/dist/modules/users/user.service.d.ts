import type { RegisterInput, LoginInput, UpdateUserInput } from "./user.schema.js";
export declare class UserService {
    static register(data: RegisterInput): Promise<{
        user: {
            fullName: string;
            email: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string | null;
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
            fullName: string;
            email: string;
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
            createdAt: Date;
            updatedAt: Date;
        } | null;
        role: {
            name: import("../../generated/index.js").$Enums.RoleType;
            id: string;
        };
        fullName: string;
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        isActive: boolean;
        roleId: string;
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
            createdAt: Date;
            updatedAt: Date;
        } | null;
        role: {
            name: import("../../generated/index.js").$Enums.RoleType;
            id: string;
        };
    } & {
        fullName: string;
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
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
            createdAt: Date;
            updatedAt: Date;
        } | null;
        role: {
            name: import("../../generated/index.js").$Enums.RoleType;
            id: string;
        };
    } & {
        fullName: string;
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
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
            createdAt: Date;
            updatedAt: Date;
        } | null;
        role: {
            name: import("../../generated/index.js").$Enums.RoleType;
            id: string;
        };
    } & {
        fullName: string;
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
        passwordHash: string;
        isActive: boolean;
        roleId: string;
    })[]>;
    static getRoles(): Promise<{
        name: import("../../generated/index.js").$Enums.RoleType;
        id: string;
    }[]>;
}
//# sourceMappingURL=user.service.d.ts.map