import prisma from "../../config/database.js";
import { AppError } from "../../utils/AppError.js";
import type { CreateAttendanceInput, UpdateAttendanceInput, MarkDailyAttendanceInput } from "./attendance.schema.js";

export class AttendanceService {
  static async create(companyId: string, data: CreateAttendanceInput) {
    // Vérifier que le workSchedule appartient à la company
    const workSchedule = await prisma.workSchedule.findUnique({
      where: { id: data.workScheduleId },
      include: { employee: true }
    });

    if (!workSchedule || workSchedule.employee.companyId !== companyId) {
      throw new AppError("WorkSchedule not found or access denied", 404);
    }

    return prisma.attendance.create({
      data: {
        workScheduleId: data.workScheduleId,
        date: new Date(data.date),
        workedHours: data.workedHours || null,
      },
      include: {
        workSchedule: {
          include: { employee: true }
        }
      }
    });
  }

  static async listByEmployee(companyId: string, employeeId: string, startDate?: Date, endDate?: Date) {
    const where: any = {
      workSchedule: {
        employee: {
          id: employeeId,
          companyId
        }
      }
    };

    if (startDate && endDate) {
      where.date = {
        gte: startDate,
        lte: endDate
      };
    }

    return prisma.attendance.findMany({
      where,
      include: {
        workSchedule: {
          include: { employee: true }
        }
      },
      orderBy: { date: "desc" }
    });
  }

  static async listByCompany(companyId: string, startDate?: Date, endDate?: Date) {
    const where: any = {
      workSchedule: {
        employee: {
          companyId
        }
      }
    };

    if (startDate && endDate) {
      where.date = {
        gte: startDate,
        lte: endDate
      };
    }

    return prisma.attendance.findMany({
      where,
      include: {
        workSchedule: {
          include: { employee: true }
        }
      },
      orderBy: { date: "desc" }
    });
  }

  static async update(companyId: string, attendanceId: string, data: UpdateAttendanceInput) {
    // Vérifier l'accès
    const attendance = await prisma.attendance.findUnique({
      where: { id: attendanceId },
      include: {
        workSchedule: {
          include: { employee: true }
        }
      }
    });

    if (!attendance || attendance.workSchedule.employee.companyId !== companyId) {
      throw new AppError("Attendance not found or access denied", 404);
    }

    const updateData: any = {};
    if (data.workedHours !== undefined) updateData.workedHours = data.workedHours;
    if (data.validated !== undefined) updateData.validated = data.validated;

    return prisma.attendance.update({
      where: { id: attendanceId },
      data: updateData,
      include: {
        workSchedule: {
          include: { employee: true }
        }
      }
    });
  }

  static async validate(companyId: string, attendanceId: string) {
    return this.update(companyId, attendanceId, { validated: true });
  }

  static async bulkCreate(companyId: string, attendances: CreateAttendanceInput[]) {
    // Vérifier tous les workSchedules
    const workScheduleIds = attendances.map(a => a.workScheduleId);
    const workSchedules = await prisma.workSchedule.findMany({
      where: {
        id: { in: workScheduleIds },
        employee: { companyId }
      }
    });

    if (workSchedules.length !== workScheduleIds.length) {
      throw new AppError("Some workSchedules not found or access denied", 404);
    }

    const data = attendances.map(att => ({
      workScheduleId: att.workScheduleId,
      date: new Date(att.date),
      workedHours: att.workedHours || null,
    }));

    return prisma.attendance.createMany({ data });
  }

  static async markDailyAttendance(companyId: string, data: MarkDailyAttendanceInput) {
    const date = new Date(data.date);

    // Get all active employees with work schedules for this company
    const employees = await prisma.user.findMany({
      where: {
        companyId,
        isActive: true,
        contractType: { not: null } // Only users with employee data
      },
      include: {
        workSchedules: {
          where: {
            startDate: { lte: date },
            endDate: { gte: date },
          },
        },
      },
    });

    // Filter employees who have work schedules for this date
    const eligibleEmployees = employees.filter(emp => emp.workSchedules.length > 0);

    // Check if all requested employees are eligible
    const ineligibleEmployeeIds = data.presentEmployeeIds.filter(
      employeeId => !eligibleEmployees.some(emp => emp.id === employeeId)
    );

    if (ineligibleEmployeeIds.length > 0) {
      // Get employee names for better error message
      const ineligibleEmployees = await prisma.user.findMany({
        where: { id: { in: ineligibleEmployeeIds } },
        select: { fullName: true }
      });
      const names = ineligibleEmployees.map((emp: { fullName: string }) => emp.fullName).join(', ');
      throw new AppError(`Les employés suivants n'ont pas de planning de travail pour cette date: ${names}`, 400);
    }

    // Check for existing attendance records on this date
    const existingAttendances = await prisma.attendance.findMany({
      where: {
        workSchedule: {
          employee: {
            id: { in: data.presentEmployeeIds },
            companyId,
          },
        },
        date,
      },
      include: {
        workSchedule: {
          include: { employee: true }
        }
      }
    });

    // Filter out employees who already have attendance for this date
    const alreadyMarkedEmployeeIds = existingAttendances.map(att => att.workSchedule.employee.id);
    const newEmployeeIds = data.presentEmployeeIds.filter(
      employeeId => !alreadyMarkedEmployeeIds.includes(employeeId)
    );

    if (newEmployeeIds.length === 0) {
      throw new AppError(`Tous les employés sélectionnés ont déjà une présence enregistrée pour cette date`, 400);
    }

    // Create attendance records for present employees who don't have attendance yet
    const attendancesToCreate = newEmployeeIds
      .map(employeeId => {
        const employee = eligibleEmployees.find(emp => emp.id === employeeId);
        if (!employee || employee.workSchedules.length === 0) return null;

        const workSchedule = employee.workSchedules[0]; // Assuming one active schedule
        if (!workSchedule) return null;

        return {
          workScheduleId: workSchedule.id,
          date,
          workedHours: workSchedule.type === "HOURLY" ? workSchedule.hoursPerDay : null,
          validated: true, // Auto-validate for vigile marking
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    if (attendancesToCreate.length > 0) {
      await prisma.attendance.createMany({ data: attendancesToCreate });
    }

    // Prepare response message
    let message = `Présence marquée pour ${attendancesToCreate.length} employé(s) le ${data.date}`;
    if (alreadyMarkedEmployeeIds.length > 0) {
      const alreadyMarkedNames = existingAttendances.map(att => att.workSchedule.employee.fullName).join(', ');
      message += `. Les employés suivants avaient déjà une présence: ${alreadyMarkedNames}`;
    }

    return {
      message,
      markedCount: attendancesToCreate.length,
      alreadyMarkedCount: alreadyMarkedEmployeeIds.length
    };
  }

  static async getTodayAttendances(companyId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return prisma.attendance.findMany({
      where: {
        date: today,
        workSchedule: {
          employee: {
            companyId
          }
        }
      },
      include: {
        workSchedule: {
          include: {
            employee: {
              select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true
              }
            }
          }
        }
      },
      orderBy: { date: 'desc' }
    });
  }

  /**
   * Validate an attendance record with hours (for admin validation)
   */
  static async validateAttendanceWithHours(
    companyId: string,
    attendanceId: string,
    validatedByUserId: string,
    workedHours: number
  ) {
    // Find the attendance
    const attendance = await prisma.attendance.findUnique({
      where: { id: attendanceId },
      include: {
        workSchedule: {
          include: { employee: true }
        }
      }
    });

    if (!attendance) {
      throw new AppError('Attendance not found', 404);
    }

    if (attendance.workSchedule.employee.companyId !== companyId) {
      throw new AppError('Access denied', 403);
    }

    // Update attendance with validation and hours
    return prisma.attendance.update({
      where: { id: attendanceId },
      data: {
        workedHours,
        validated: true,
        validatedBy: validatedByUserId,
        validatedAt: new Date()
      },
      include: {
        workSchedule: {
          include: {
            employee: {
              select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true
              }
            }
          }
        }
      }
    });
  }

  /**
   * Get pending attendances for admin validation
   */
  static async getPendingAttendances(companyId: string) {
    return prisma.attendance.findMany({
      where: {
        validated: false,
        workSchedule: {
          employee: {
            companyId
          }
        }
      },
      include: {
        workSchedule: {
          include: {
            employee: {
              select: {
                id: true,
                fullName: true,
                position: true,
                contractType: true
              }
            }
          }
        }
      },
      orderBy: { date: 'desc' }
    });
  }
}
