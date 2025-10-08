import type { UpdateAttendanceInput } from "./workSchedule.schema.js";
export declare class WorkScheduleService {
    static getAttendances(companyId: string, workScheduleId: string): Promise<{
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    }[]>;
    static updateAttendance(companyId: string, attendanceId: string, data: UpdateAttendanceInput): Promise<{
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
        validatedBy: string | null;
        validatedAt: Date | null;
    }>;
}
//# sourceMappingURL=workSchedule.service.d.ts.map