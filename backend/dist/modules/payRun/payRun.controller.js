import { createPayRunSchema, generatePayslipsSchema } from "./payRun.schema.js";
import { PayRunService } from "./payRun.service.js";
export class PayRunController {
    static getCompanyId(req) {
        let companyId = req.user.companyId;
        if (req.user.role === 'SUPER_ADMIN') {
            companyId = req.headers['x-company-id'];
        }
        return companyId || null;
    }
    static async create(req, res) {
        const companyId = PayRunController.getCompanyId(req);
        const data = createPayRunSchema.parse(req.body);
        const payRun = await PayRunService.create(companyId, data);
        res.status(201).json(payRun);
    }
    static async list(req, res) {
        try {
            const companyId = PayRunController.getCompanyId(req);
            if (!companyId) {
                return res.json([]);
            }
            const payRuns = await PayRunService.list(companyId);
            res.json(payRuns);
        }
        catch (error) {
            // If company DB doesn't exist yet, return empty array
            if (error.message?.includes('Company DB connection not found') ||
                error.code === 'P1001' || error.code === 'P2028') {
                return res.json([]);
            }
            throw error;
        }
    }
    static async generatePayslips(req, res) {
        try {
            const companyId = PayRunController.getCompanyId(req);
            const { payRunId } = generatePayslipsSchema.parse(req.body);
            const result = await PayRunService.generatePayslips(companyId, payRunId);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async getById(req, res) {
        try {
            const companyId = PayRunController.getCompanyId(req);
            const payRunId = req.params.id;
            const payRun = await PayRunService.getById(companyId, payRunId);
            res.json(payRun);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async update(req, res) {
        try {
            const companyId = PayRunController.getCompanyId(req);
            const payRunId = req.params.id;
            const payRun = await PayRunService.update(companyId, payRunId, req.body);
            res.json(payRun);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const companyId = PayRunController.getCompanyId(req);
            const payRunId = req.params.id;
            await PayRunService.delete(companyId, payRunId);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=payRun.controller.js.map