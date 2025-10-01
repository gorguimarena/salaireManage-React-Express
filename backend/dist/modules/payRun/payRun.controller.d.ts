import type { Request, Response } from "express";
export declare class PayRunController {
    static getCompanyId(req: Request): any;
    static create(req: Request, res: Response): Promise<void>;
    static list(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static generatePayslips(req: Request, res: Response): Promise<void>;
    static getById(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=payRun.controller.d.ts.map