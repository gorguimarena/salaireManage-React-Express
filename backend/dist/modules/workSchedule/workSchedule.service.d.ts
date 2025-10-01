import type { UpdateAttendanceInput } from "./workSchedule.schema.js";
export declare class WorkScheduleService {
    static getAttendances(companyId: string, workScheduleId: string): Promise<{
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
    }[]>;
    static updateAttendance(companyId: string, attendanceId: string, data: UpdateAttendanceInput): Promise<{
        id: string;
        validated: boolean;
        workedHours: number | null;
        workScheduleId: string;
        date: Date;
    }>;
}
//# sourceMappingURL=workSchedule.service.d.ts.map