import type { Request, Response, NextFunction } from "express"
import { createPayRunSchema, generatePayslipsSchema } from "./payRun.schema.js";
import { PayRunService } from "./payRun.service.js";



export class PayRunController {
  static getCompanyId(req: Request) {
    let companyId = (req as any).user.companyId;
    if ((req as any).user.role === 'SUPER_ADMIN') {
      companyId = req.headers['x-company-id'] as string;
    }
    return companyId || null;
  }

  static async create(req: Request, res: Response) {
    const companyId = PayRunController.getCompanyId(req);
    const data = createPayRunSchema.parse(req.body);

    const payRun = await PayRunService.create(companyId!, data);
    res.status(201).json(payRun);
  }

  static async list(req: Request, res: Response) {
    try {
      const companyId = PayRunController.getCompanyId(req);
      if (!companyId) {
        return res.json([]);
      }
      const payRuns = await PayRunService.list(companyId);
      res.json(payRuns);
    } catch (error: any) {
      // If company DB doesn't exist yet, return empty array
      if (error.message?.includes('Company DB connection not found') ||
          error.code === 'P1001' || error.code === 'P2028') {
        return res.json([]);
      }
      throw error;
    }
  }

  static async approve(req: Request, res: Response) {
    try {
      const companyId = PayRunController.getCompanyId(req);
      const payRunId = req.params.id;

      const result = await PayRunService.approve(companyId!, payRunId!);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async generatePayslips(req: Request, res: Response) {
    try {
      const companyId = PayRunController.getCompanyId(req);
      const { payRunId } = generatePayslipsSchema.parse(req.body);

      const result = await PayRunService.generatePayslips(companyId, payRunId);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const companyId = PayRunController.getCompanyId(req);
      const payRunId = req.params.id;

      const payRun = await PayRunService.getById(companyId!, payRunId!);
      res.json(payRun);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const companyId = PayRunController.getCompanyId(req);
      const payRunId = req.params.id;

      const payRun = await PayRunService.update(companyId!, payRunId!, req.body);
      res.json(payRun);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const companyId = PayRunController.getCompanyId(req);
      const payRunId = req.params.id;

      await PayRunService.delete(companyId!, payRunId!);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

