import { PayslipService } from "./payslip.service.js";
export class PayslipController {
    static getCompanyId(req) {
        let companyId = req.user.companyId;
        if (req.user.role === 'SUPER_ADMIN') {
            companyId = req.headers['x-company-id'];
        }
        return companyId || null;
    }
    static async list(req, res) {
        try {
            const companyId = PayslipController.getCompanyId(req);
            if (!companyId) {
                return res.json([]);
            }
            const userRole = req.user.role;
            const payslips = await PayslipService.list(companyId, userRole);
            res.json(payslips);
        }
        catch (error) {
            // If company DB doesn't exist yet, return empty array
            if (error.message?.includes('Company DB connection not found') ||
                error.code === 'P1001' || error.code === 'P2028') {
                return res.json([]);
            }
            res.status(500).json({ error: error.message });
        }
    }
    static async getById(req, res) {
        try {
            const companyId = PayslipController.getCompanyId(req);
            const payslip = await PayslipService.getById(companyId, req.params.id);
            res.json(payslip);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const companyId = PayslipController.getCompanyId(req);
            const payslip = await PayslipService.create(companyId, req.body);
            res.status(201).json(payslip);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async update(req, res) {
        try {
            const companyId = PayslipController.getCompanyId(req);
            const payslip = await PayslipService.update(companyId, req.params.id, req.body);
            res.json(payslip);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const companyId = PayslipController.getCompanyId(req);
            await PayslipService.delete(companyId, req.params.id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=payslip.controller.js.map