import prisma from "../../config/database.js";
import { AppError } from "../../utils/AppError.js";
import type { CreateWorkScheduleInput } from "../workSchedule/workSchedule.schema.js";
import type { CreateEmployeeInput } from "./employee.schema.js";


export type CreateEmployeAndWorkSchedule = {
  employee: CreateEmployeeInput;
  workSchedule?: CreateWorkScheduleInput | undefined;
};



export class EmployeeService {
  static async create(companyId: string, data: CreateEmployeAndWorkSchedule) {
    return prisma.$transaction(async (tx) => {
      const employeeData: any = { ...data.employee };
      if (employeeData.hireDate) {
        employeeData.hireDate = new Date(employeeData.hireDate);
      }
      const employee = await tx.employee.create({
        data: { ...employeeData, companyId },
      });

      if (
        data.workSchedule &&
        (data.employee.contractType === "DAILY" ||
          data.employee.contractType === "HOURLY")
      ) {
        const { startDate, endDate, hoursPerDay } = data.workSchedule;

        if (new Date(startDate) >= new Date(endDate)) {
          throw new Error("startDate must be before endDate");
        }

        await tx.workSchedule.create({
          data: {
            employeeId: employee.id,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            type: data.employee.contractType,
            hoursPerDay: data.employee.contractType === "HOURLY" ? hoursPerDay ?? 8 : null,
          },
        });
      }

      return employee;
    });
  }

  static async list(companyId: string, filters?: { active?: boolean }) {
    return prisma.employee.findMany({
      where: {
        companyId,
        active: filters?.active ?? true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async toggleActive(companyId: string, employeeId: string) {
    const employee = await prisma.employee.findUnique({
      where: { id: employeeId, companyId },
    });
    if (!employee) throw new AppError("Employee not found", 404);

    return prisma.employee.update({
      where: { id: employeeId, companyId },
      data: { active: !employee.active },
    });
  }

  static async update(companyId: string, employeeId: string, data: any) {
    const employee = await prisma.employee.findUnique({
      where: { id: employeeId, companyId },
    });
    if (!employee) throw new AppError("Employee not found", 404);

    return prisma.employee.update({
      where: { id: employeeId, companyId },
      data,
    });
  }

  static async delete(companyId: string, employeeId: string) {
    const employee = await prisma.employee.findUnique({
      where: { id: employeeId, companyId },
    });
    if (!employee) throw new AppError("Employee not found", 404);

    return prisma.employee.delete({
      where: { id: employeeId, companyId },
    });
  }
}
