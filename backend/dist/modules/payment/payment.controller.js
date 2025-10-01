import { PaymentService } from "./payment.service.js";
export class PaymentController {
    static getCompanyId(req) {
        let companyId = req.user.companyId;
        if (req.user.role === 'SUPER_ADMIN') {
            companyId = req.headers['x-company-id'];
        }
        return companyId;
    }
    static async list(req, res) {
        try {
            const companyId = PaymentController.getCompanyId(req);
            const payments = await PaymentService.list(companyId);
            res.json(payments);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async getById(req, res) {
        try {
            const companyId = PaymentController.getCompanyId(req);
            const payment = await PaymentService.getById(companyId, req.params.id);
            res.json(payment);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const companyId = PaymentController.getCompanyId(req);
            const payment = await PaymentService.create(companyId, req.body);
            res.status(201).json(payment);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async update(req, res) {
        try {
            const companyId = PaymentController.getCompanyId(req);
            const payment = await PaymentService.update(companyId, req.params.id, req.body);
            res.json(payment);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const companyId = PaymentController.getCompanyId(req);
            await PaymentService.delete(companyId, req.params.id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=payment.controller.js.map