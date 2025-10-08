import type { CreateAttendanceInput, UpdateAttendanceInput, MarkDailyAttendanceInput } from "./attendance.schema.js";
export declare class AttendanceService {
    static create(companyId: string, data: CreateAttendanceInput): Promise<{
        workSchedule: {
            employee: {
                contractType: import("../../generated/index.js").$Enums.ContractType | null;
                fullName: string;
                position: string | null;
                salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
                bankDetails: string | null;
                email: string;
                phone: string | null;
                hireDate: Date | null;
                active: boolean | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                companyId: string | null;
                passwordHash: string;
                isActive: boolean;
                roleId: string;
                canValidateFully: boolean;
            };
        } & {
            type: import("../../generated/index.js").$Enums.ContractType;
            id: string;
            startDate: Date;
            endDate: Date;
            hoursPerDay: number | null;
            employeeId: string;
        };
    } & {
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    }>;
    static listByEmployee(companyId: string, employeeId: string, startDate?: Date, endDate?: Date): Promise<({
        workSchedule: {
            employee: {
                contractType: import("../../generated/index.js").$Enums.ContractType | null;
                fullName: string;
                position: string | null;
                salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
                bankDetails: string | null;
                email: string;
                phone: string | null;
                hireDate: Date | null;
                active: boolean | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                companyId: string | null;
                passwordHash: string;
                isActive: boolean;
                roleId: string;
                canValidateFully: boolean;
            };
        } & {
            type: import("../../generated/index.js").$Enums.ContractType;
            id: string;
            startDate: Date;
            endDate: Date;
            hoursPerDay: number | null;
            employeeId: string;
        };
    } & {
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    })[]>;
    static listByCompany(companyId: string, startDate?: Date, endDate?: Date): Promise<({
        workSchedule: {
            employee: {
                contractType: import("../../generated/index.js").$Enums.ContractType | null;
                fullName: string;
                position: string | null;
                salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
                bankDetails: string | null;
                email: string;
                phone: string | null;
                hireDate: Date | null;
                active: boolean | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                companyId: string | null;
                passwordHash: string;
                isActive: boolean;
                roleId: string;
                canValidateFully: boolean;
            };
        } & {
            type: import("../../generated/index.js").$Enums.ContractType;
            id: string;
            startDate: Date;
            endDate: Date;
            hoursPerDay: number | null;
            employeeId: string;
        };
    } & {
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    })[]>;
    static update(companyId: string, attendanceId: string, data: UpdateAttendanceInput): Promise<{
        workSchedule: {
            employee: {
                contractType: import("../../generated/index.js").$Enums.ContractType | null;
                fullName: string;
                position: string | null;
                salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
                bankDetails: string | null;
                email: string;
                phone: string | null;
                hireDate: Date | null;
                active: boolean | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                companyId: string | null;
                passwordHash: string;
                isActive: boolean;
                roleId: string;
                canValidateFully: boolean;
            };
        } & {
            type: import("../../generated/index.js").$Enums.ContractType;
            id: string;
            startDate: Date;
            endDate: Date;
            hoursPerDay: number | null;
            employeeId: string;
        };
    } & {
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    }>;
    static validate(companyId: string, attendanceId: string): Promise<{
        workSchedule: {
            employee: {
                contractType: import("../../generated/index.js").$Enums.ContractType | null;
                fullName: string;
                position: string | null;
                salaryOrRate: import("../../generated/runtime/library.js").Decimal | null;
                bankDetails: string | null;
                email: string;
                phone: string | null;
                hireDate: Date | null;
                active: boolean | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                companyId: string | null;
                passwordHash: string;
                isActive: boolean;
                roleId: string;
                canValidateFully: boolean;
            };
        } & {
            type: import("../../generated/index.js").$Enums.ContractType;
            id: string;
            startDate: Date;
            endDate: Date;
            hoursPerDay: number | null;
            employeeId: string;
        };
    } & {
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    }>;
    static bulkCreate(companyId: string, attendances: CreateAttendanceInput[]): Promise<import("../../generated/index.js").Prisma.BatchPayload>;
    static markDailyAttendance(companyId: string, data: MarkDailyAttendanceInput): Promise<{
        message: string;
        markedCount: number;
        alreadyMarkedCount: number;
    }>;
    static getTodayAttendances(companyId: string): Promise<({
        workSchedule: {
            employee: {
                contractType: import("../../generated/index.js").$Enums.ContractType | null;
                fullName: string;
                position: string | null;
                id: string;
            };
        } & {
            type: import("../../generated/index.js").$Enums.ContractType;
            id: string;
            startDate: Date;
            endDate: Date;
            hoursPerDay: number | null;
            employeeId: string;
        };
    } & {
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    })[]>;
    /**
     * Validate an attendance record with hours (for admin validation)
     */
    static validateAttendanceWithHours(companyId: string, attendanceId: string, validatedByUserId: string, workedHours: number): Promise<{
        workSchedule: {
            employee: {
                contractType: import("../../generated/index.js").$Enums.ContractType | null;
                fullName: string;
                position: string | null;
                id: string;
            };
        } & {
            type: import("../../generated/index.js").$Enums.ContractType;
            id: string;
            startDate: Date;
            endDate: Date;
            hoursPerDay: number | null;
            employeeId: string;
        };
    } & {
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    }>;
    /**
     * Get pending attendances for admin validation
     */
    static getPendingAttendances(companyId: string): Promise<({
        workSchedule: {
            employee: {
                contractType: import("../../generated/index.js").$Enums.ContractType | null;
                fullName: string;
                position: string | null;
                id: string;
            };
        } & {
            type: import("../../generated/index.js").$Enums.ContractType;
            id: string;
            startDate: Date;
            endDate: Date;
            hoursPerDay: number | null;
            employeeId: string;
        };
    } & {
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    })[]>;
}
//# sourceMappingURL=attendance.service.d.ts.map