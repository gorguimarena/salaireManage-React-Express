import type { Request, Response, NextFunction } from "express";
import {
  createEmployeeSchema,
  employeeFilterSchema,
} from "./employee.schema.js";
import { EmployeeService } from "./employee.service.js";
import { createWorkScheduleSchema } from "../workSchedule/workSchedule.schema.js";

export class EmployeeController {
  static async create(req: Request, res: Response) {
  try {
    let companyId = (req as any).user.companyId;
    if ((req as any).user.role === 'SUPER_ADMIN') {
      companyId = req.headers['x-company-id'] as string;
    }
    const { employeeData, workScheduleData } = req.body;

    const employee = createEmployeeSchema.parse(employeeData);
    const workSchedule = workScheduleData 
      ? createWorkScheduleSchema.parse(workScheduleData)
      : undefined;

    const createdEmployee = await EmployeeService.create(companyId!, {
      employee,
      workSchedule,
    });

    res.status(201).json(createdEmployee);
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ error: err.message || "Invalid request" });
  }
}

  static async list(req: Request, res: Response) {
    try {
      let companyId = (req as any).user.companyId;
      if ((req as any).user.role === 'SUPER_ADMIN') {
        companyId = req.headers['x-company-id'] as string;
      }
      companyId = companyId || null;

      if (!companyId) {
        console.log('Employee list - No companyId, returning empty array');
        return res.json([]);
      }
      const filters = employeeFilterSchema.safeParse(req.query);
      if (!filters.success) {
        console.error('Invalid query parameters:', filters.error);
        return res.status(400).json({ error: 'Invalid query parameters' });
      }

      const employees = await EmployeeService.list(companyId, {
        active: filters.data.active ? true : filters.data.active === "false" ? false : true,
      });

      res.json(employees);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async toggleActive(req: Request, res: Response) {
    const companyId = (req as any).user.companyId;
    const employeeId = req.params.id;

    const employee = await EmployeeService.toggleActive(
      companyId!,
      employeeId!
    );
    res.json(employee);
  }

  static async update(req: Request, res: Response) {
    try {
      const companyId = (req as any).user.companyId;
      const employeeId = req.params.id;
      const updateData = req.body;

      const employee = await EmployeeService.update(companyId!, employeeId!, updateData);
      res.json(employee);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const companyId = (req as any).user.companyId;
      const employeeId = req.params.id;

      await EmployeeService.delete(companyId!, employeeId!);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
