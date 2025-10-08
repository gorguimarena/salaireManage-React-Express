export declare class SuperAdminPermissionService {
    static grantPermission(companyId: string, superAdminId: string, grantedBy: string): Promise<{
        company: {
            name: string;
            id: string;
        };
        superAdmin: {
            fullName: string;
            email: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        superAdminId: string;
        grantedBy: string;
        grantedAt: Date;
    }>;
    static revokePermission(companyId: string, superAdminId: string, revokedBy: string): Promise<{
        message: string;
    }>;
    static listGrantedPermissions(companyId: string, userId: string): Promise<({
        superAdmin: {
            fullName: string;
            email: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        superAdminId: string;
        grantedBy: string;
        grantedAt: Date;
    })[]>;
    static listSuperAdminPermissions(superAdminId: string): Promise<({
        company: {
            name: string;
            id: string;
            logoUrl: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        superAdminId: string;
        grantedBy: string;
        grantedAt: Date;
    })[]>;
    static checkPermission(superAdminId: string, companyId: string): Promise<boolean>;
    static listAllSuperAdmins(): Promise<{
        fullName: string;
        email: string;
        id: string;
    }[]>;
}
//# sourceMappingURL=superAdminPermission.service.d.ts.map