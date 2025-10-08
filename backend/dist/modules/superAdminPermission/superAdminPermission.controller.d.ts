import type { Request, Response } from "express";
export declare class SuperAdminPermissionController {
    static grantPermission(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static revokePermission(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static listGrantedPermissions(req: Request, res: Response): Promise<void>;
    static listSuperAdminPermissions(req: Request, res: Response): Promise<void>;
    static listAllSuperAdmins(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static checkPermission(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=superAdminPermission.controller.d.ts.map