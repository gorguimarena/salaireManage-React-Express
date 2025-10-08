import type { Request, Response, NextFunction } from "express";
export declare class LoanController {
    private static getCompanyId;
    /**
     * Create a new loan
     */
    static create(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get all loans for company
     */
    static getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get loan by ID
     */
    static getById(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Update a loan
     */
    static update(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Delete a loan
     */
    static delete(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get active loans for an employee
     */
    static getEmployeeLoans(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=loan.controller.d.ts.map