import { createEmployeeSchema, employeeFilterSchema, } from "./employee.schema.js";
import { EmployeeService } from "./employee.service.js";
import { createWorkScheduleSchema } from "../workSchedule/workSchedule.schema.js";
import { SuperAdminPermissionService } from "../superAdminPermission/superAdminPermission.service.js";
export class EmployeeController {
    static async create(req, res) {
        try {
            let companyId = req.user.companyId;
            if (req.user.role === 'SUPER_ADMIN') {
                companyId = req.headers['x-company-id'];
            }
            const { employeeData, workScheduleData } = req.body;
            const employee = createEmployeeSchema.parse(employeeData);
            const workSchedule = workScheduleData
                ? createWorkScheduleSchema.parse(workScheduleData)
                : undefined;
            const createdEmployee = await EmployeeService.create(companyId, {
                employee,
                workSchedule,
            });
            res.status(201).json(createdEmployee);
        }
        catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message || "Invalid request" });
        }
    }
    static async list(req, res) {
        try {
            let companyId = req.user.companyId;
            const user = req.user;
            if (user.role === 'SUPER_ADMIN') {
                companyId = req.headers['x-company-id'];
                // TODO: Re-enable permission check after Prisma client regeneration
                // Check if super admin has permission for this company
                // if (companyId) {
                //   const hasPermission = await SuperAdminPermissionService.checkPermission(user.id, companyId);
                //   if (!hasPermission) {
                //     return res.status(403).json({ error: 'You do not have permission to access this company' });
                //   }
                // }
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
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async search(req, res) {
        try {
            let companyId = req.user.companyId;
            const user = req.user;
            if (user.role === 'SUPER_ADMIN') {
                companyId = req.headers['x-company-id'];
                // TODO: Re-enable permission check after Prisma client regeneration
                // Check if super admin has permission for this company
                // if (companyId) {
                //   const hasPermission = await SuperAdminPermissionService.checkPermission(user.id, companyId);
                //   if (!hasPermission) {
                //     return res.status(403).json({ error: 'You do not have permission to access this company' });
                //   }
                // }
            }
            companyId = companyId || null;
            if (!companyId) {
                return res.json([]);
            }
            const { q: searchTerm, limit, date } = req.query;
            if (!searchTerm || typeof searchTerm !== 'string') {
                return res.status(400).json({ error: 'Search term is required' });
            }
            const limitNum = limit ? parseInt(limit) : 50;
            const searchDate = date ? new Date(date) : undefined;
            const employees = await EmployeeService.search(companyId, searchTerm, searchDate, limitNum);
            res.json(employees);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async toggleActive(req, res) {
        const companyId = req.user.companyId;
        const employeeId = req.params.id;
        const employee = await EmployeeService.toggleActive(companyId, employeeId);
        res.json(employee);
    }
    static async update(req, res) {
        try {
            const companyId = req.user.companyId;
            const employeeId = req.params.id;
            const updateData = req.body;
            const employee = await EmployeeService.update(companyId, employeeId, updateData);
            res.json(employee);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const companyId = req.user.companyId;
            const employeeId = req.params.id;
            await EmployeeService.delete(companyId, employeeId);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async markAttendanceManual(req, res) {
        try {
            const employeeId = req.params.id;
            const markedByUserId = req.user.id;
            if (!employeeId) {
                return res.status(400).json({ error: 'Employee ID is required' });
            }
            const result = await EmployeeService.markAttendanceManual(employeeId, markedByUserId);
            res.json({
                success: true,
                message: 'Attendance marked successfully',
                data: result
            });
        }
        catch (error) {
            console.error('Error marking attendance:', error);
            res.status(500).json({ error: error.message || 'Failed to mark attendance' });
        }
    }
}
//# sourceMappingURL=employee.controller.js.map