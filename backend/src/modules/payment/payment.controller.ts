import type { Request, Response, NextFunction } from "express";
import { PaymentService } from "./payment.service.js";

export class PaymentController {
  static getCompanyId(req: Request) {
    let companyId = (req as any).user.companyId;
    if ((req as any).user.role === 'SUPER_ADMIN') {
      companyId = req.headers['x-company-id'] as string;
    }
    return companyId;
  }

  static async list(req: Request, res: Response) {
    try {
      const companyId = PaymentController.getCompanyId(req);
      const payments = await PaymentService.list(companyId);
      res.json(payments);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const companyId = PaymentController.getCompanyId(req);
      const payment = await PaymentService.getById(companyId, req.params.id!);
      res.json(payment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const companyId = PaymentController.getCompanyId(req);
      const payment = await PaymentService.create(companyId, req.body);
      res.status(201).json(payment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const companyId = PaymentController.getCompanyId(req);
      const payment = await PaymentService.update(companyId, req.params.id!, req.body);
      res.json(payment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const companyId = PaymentController.getCompanyId(req);
      await PaymentService.delete(companyId, req.params.id!);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
