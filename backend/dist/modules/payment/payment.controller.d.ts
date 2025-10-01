import type { Request, Response } from "express";
export declare class PaymentController {
    static getCompanyId(req: Request): any;
    static list(req: Request, res: Response): Promise<void>;
    static getById(req: Request, res: Response): Promise<void>;
    static create(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=payment.controller.d.ts.map