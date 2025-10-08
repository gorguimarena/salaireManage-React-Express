import type { Request, Response, NextFunction } from "express";
import { LoanService } from "./loan.service.js";
import { AppError } from "../../utils/AppError.js";
import prisma from "../../config/database.js";

export class LoanController {
  private static async getCompanyId(req: Request): Promise<string> {
    const user = (req as any).user;
    let companyId = user.companyId;

    if (user.role === 'SUPER_ADMIN') {
      companyId = req.headers['x-company-id'] as string;

      // TODO: Re-enable permission check after Prisma client regeneration
      // Check if super admin has permission for this company
      // if (companyId) {
      //   const hasPermission = await SuperAdminPermissionService.checkPermission(user.id, companyId);
      //   if (!hasPermission) {
      //     throw new AppError('You do not have permission to access this company', 403);
      //   }
      // }
    }

    if (!companyId) {
      throw new AppError('Company ID not found', 400);
    }
    return companyId;
  }

  /**
   * Create a new loan
   */
  static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companyId = await LoanController.getCompanyId(req);
      const createdBy = (req as any).user.id;
      const loanData = req.body;

      const loan = await LoanService.createLoan(companyId, loanData, createdBy);
      res.status(201).json(loan);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get all loans for company
   */
  static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companyId = await LoanController.getCompanyId(req);
      const { employeeId, status } = req.query;

      const filters: any = {};
      if (employeeId) filters.employeeId = employeeId as string;
      if (status) filters.status = status as string;

      const loans = await LoanService.getLoansByCompany(companyId, filters);
      res.json(loans);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get loan by ID
   */
  static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companyId = await LoanController.getCompanyId(req);
      const { id } = req.params;

      if (!id) {
        throw new AppError('Loan ID is required', 400);
      }

      const loan = await LoanService.getLoanById(companyId, id);
      res.json(loan);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update a loan
   */
  static async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companyId = await LoanController.getCompanyId(req);
      const { id } = req.params;

      if (!id) {
        throw new AppError('Loan ID is required', 400);
      }

      const updateData = req.body;

      const loan = await LoanService.updateLoan(companyId, id, updateData);
      res.json(loan);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete a loan
   */
  static async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companyId = await LoanController.getCompanyId(req);
      const { id } = req.params;

      if (!id) {
        throw new AppError('Loan ID is required', 400);
      }

      await LoanService.deleteLoan(companyId, id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get active loans for an employee
   */
  static async getEmployeeLoans(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { employeeId } = req.params;

      if (!employeeId) {
        throw new AppError('Employee ID is required', 400);
      }

      // Verify employee belongs to user's company
      const companyId = await LoanController.getCompanyId(req);
      const employee = await prisma.user.findUnique({
        where: { id: employeeId },
        select: { companyId: true }
      });

      if (!employee || employee.companyId !== companyId) {
        throw new AppError('Employee not found or access denied', 403);
      }

      const loans = await LoanService.getActiveLoansForEmployee(employeeId);
      res.json(loans);
    } catch (error) {
      next(error);
    }
  }
}