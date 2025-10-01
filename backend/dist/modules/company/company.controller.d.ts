import type { Request, Response } from "express";
export declare class CompanyController {
    static create(req: Request, res: Response): Promise<void>;
    static getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static update(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static delete(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=company.controller.d.ts.map