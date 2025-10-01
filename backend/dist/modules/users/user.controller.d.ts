import type { Request, Response, NextFunction } from "express";
export declare class UserController {
    static register(req: Request, res: Response, next: NextFunction): Promise<void>;
    static login(req: Request, res: Response, next: NextFunction): Promise<void>;
    static logout(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getMe(req: Request, res: Response, next: NextFunction): Promise<void>;
    static updateMe(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getUserById(req: Request, res: Response, next: NextFunction): Promise<void>;
    static updateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    static deleteUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getUsersByCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
    static createUserForCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
    static updateUserForCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
    static deleteUserForCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getRoles(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=user.controller.d.ts.map