import type { Request, Response } from "express";
export declare class EmployeeController {
    static create(req: Request, res: Response): Promise<void>;
    static list(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static toggleActive(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=employee.controller.d.ts.map