import type { Request, Response } from "express";
export declare class PayslipController {
    static getCompanyId(req: Request): any;
    static list(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getById(req: Request, res: Response): Promise<void>;
    static create(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=payslip.controller.d.ts.map