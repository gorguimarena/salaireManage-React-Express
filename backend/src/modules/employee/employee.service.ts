import prisma from "../../config/database.js";
import { AppError } from "../../utils/AppError.js";
import type { CreateWorkScheduleInput } from "../workSchedule/workSchedule.schema.js";
import type { CreateEmployeeInput } from "./employee.schema.js";
import { AttendanceService } from "../attendance/attendance.service.js";
import type { RoleType } from "../../generated/index.js";


export type CreateEmployeAndWorkSchedule = {
  employee: CreateEmployeeInput;
  workSchedule?: CreateWorkScheduleInput | undefined;
};

// Note: Employee service now works with User model since Employee was merged into User



export class EmployeeService {
  static async create(companyId: string, data: CreateEmployeAndWorkSchedule) {
    return prisma.$transaction(async (tx) => {
      // Since Employee was merged into User, we create a User with employee data
      // Note: This assumes the user account is created separately, and we're just adding employee data
      // For now, we'll create a user with minimal auth data and employee data
      // In practice, this might need to be refactored to separate user creation from employee data addition

      const employeeData: any = { ...data.employee };
      if (employeeData.hireDate) {
        employeeData.hireDate = new Date(employeeData.hireDate);
      }

      // Find or create the default employee role (CASHIER)
      let employeeRole = await tx.role.findUnique({
        where: { name: "CASHIER" },
      });

      if (!employeeRole) {
        employeeRole = await tx.role.create({
          data: { name: "CASHIER" as RoleType },
        });
      }

      // Create user with employee data
      const user = await tx.user.create({
        data: {
          ...employeeData,
          companyId,
          // Set default values for required user fields
          passwordHash: "temp", // This should be set properly in user creation
          roleId: employeeRole.id,
          isActive: true,
        },
      });

      // Create work schedule for all contract types except FEE (following seeder logic)
      if (data.employee.contractType !== "FEE") {
        if (data.workSchedule) {
          // Use provided work schedule data
          const { startDate, endDate, hoursPerDay } = data.workSchedule;

          if (new Date(startDate) >= new Date(endDate)) {
            throw new Error("startDate must be before endDate");
          }

          await tx.workSchedule.create({
            data: {
              employeeId: user.id,
              startDate: new Date(startDate),
              endDate: new Date(endDate),
              type: data.employee.contractType,
              hoursPerDay: data.employee.contractType === "HOURLY" ? hoursPerDay ?? 8 : null,
            },
          });
        } else {
          // Create default work schedule for current month (following seeder logic)
          const now = new Date();
          const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

          await tx.workSchedule.create({
            data: {
              employeeId: user.id,
              startDate,
              endDate,
              type: data.employee.contractType,
              hoursPerDay: data.employee.contractType === "HOURLY" ? 8 : null,
            },
          });
        }
      }

      return user;
    });
  }

  static async list(companyId: string, filters?: { active?: boolean }) {
    return prisma.user.findMany({
      where: {
        companyId,
        isActive: filters?.active ?? true,
        // TODO: Add filter to only return users with employee data (contractType not null)
        // This will be added after Prisma client regeneration
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async search(companyId: string, searchTerm: string, date?: Date, limit: number = 50) {
    if (date) {
      // With date filter - include work schedules and exclude employees with existing attendance
      return prisma.user.findMany({
        where: {
          companyId,
          isActive: true,
          fullName: {
            contains: searchTerm,
          },
          workSchedules: {
            some: {
              startDate: { lte: date },
              endDate: { gte: date },
            },
          },
          // Exclude employees who already have attendance for this date
          NOT: {
            workSchedules: {
              some: {
                attendances: {
                  some: {
                    date: date,
                  },
                },
              },
            },
          },
        },
        orderBy: { fullName: "asc" },
        take: limit,
        include: {
          workSchedules: {
            where: {
              startDate: { lte: date },
              endDate: { gte: date },
            },
          },
        },
      });
    } else {
      // Without date filter - simple search
      return prisma.user.findMany({
        where: {
          companyId,
          isActive: true,
          fullName: {
            contains: searchTerm,
          },
        },
        orderBy: { fullName: "asc" },
        take: limit,
      });
    }
  }

  static async toggleActive(companyId: string, employeeId: string) {
    const employee = await prisma.user.findUnique({
      where: { id: employeeId, companyId },
    });
    if (!employee) throw new AppError("Employee not found", 404);

    return prisma.user.update({
      where: { id: employeeId, companyId },
      data: { isActive: !employee.isActive },
    });
  }

  static async update(companyId: string, employeeId: string, data: any) {
    const employee = await prisma.user.findUnique({
      where: { id: employeeId, companyId },
    });
    if (!employee) throw new AppError("Employee not found", 404);

    return prisma.user.update({
      where: { id: employeeId, companyId },
      data,
    });
  }

  static async delete(companyId: string, employeeId: string) {
    const employee = await prisma.user.findUnique({
      where: { id: employeeId, companyId },
    });
    if (!employee) throw new AppError("Employee not found", 404);

    return prisma.user.delete({
      where: { id: employeeId, companyId },
    });
  }

  static async markAttendanceManual(employeeId: string, markedByUserId: string): Promise<{ attendanceId: string }> {
    try {
      // Get employee with company info
      const employee = await prisma.user.findUnique({
        where: { id: employeeId },
        select: { contractType: true, companyId: true },
      });

      if (!employee) {
        throw new AppError('Employee not found', 404);
      }

      if (!employee.companyId) {
        throw new AppError('Employee has no company', 400);
      }

      // Check if employee has an active work schedule
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let workSchedule = await prisma.workSchedule.findFirst({
        where: {
          employeeId,
          startDate: { lte: today },
          endDate: { gte: today },
        },
      });

      // If no active work schedule, create one (skip only for FEE type)
      if (!workSchedule && (!employee.contractType || employee.contractType !== 'FEE')) {
        const now = new Date();
        const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        // Default to FIXED if no contractType
        const contractType = employee.contractType || 'FIXED';

        workSchedule = await prisma.workSchedule.create({
          data: {
            employeeId,
            startDate,
            endDate,
            type: contractType,
            hoursPerDay: contractType === 'HOURLY' ? 8 : null,
          },
        });
      }

      if (!workSchedule) {
        throw new AppError('No active work schedule found for this employee', 400);
      }

      // Create attendance record using AttendanceService
      const dateString = today.toISOString().substring(0, 10); // YYYY-MM-DD format
      const attendance = await AttendanceService.create(employee.companyId, {
        workScheduleId: workSchedule.id,
        date: dateString,
        workedHours: workSchedule.type === 'HOURLY' && workSchedule.hoursPerDay ? workSchedule.hoursPerDay : undefined,
      });

      return { attendanceId: attendance.id };
    } catch (error) {
      console.error('Error marking manual attendance:', error);
      throw new AppError('Failed to mark attendance', 500);
    }
  }
}
