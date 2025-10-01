import { CompanyService } from "./company.service.js";
import { createCompanySchema } from "./company.schema.js";
import { uploadCompanyLogo } from "../../config/multer.js";
export class CompanyController {
    static async create(req, res) {
        try {
            const validated = createCompanySchema.parse(req.body);
            // Handle logo upload
            let logoUrl = validated.logoUrl || null;
            if (req.file) {
                // Generate URL for the uploaded file
                logoUrl = `/uploads/${req.file.filename}`;
            }
            const companyData = {
                ...validated,
                logoUrl
            };
            const company = await CompanyService.createCompany(companyData);
            res.status(201).json({ message: "Company created", company });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async getAll(req, res) {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({ error: "Authentication required" });
            }
            if (user.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ error: "Access denied. Only SUPER_ADMIN can view all companies." });
            }
            const companies = await CompanyService.getAllCompanies();
            res.json(companies);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const user = req.user;
            // Check authorization
            if (user.role !== 'SUPER_ADMIN' && user.companyId !== id) {
                return res.status(403).json({ error: "Access denied. You can only access your own company." });
            }
            const company = await CompanyService.getCompanyById(id);
            if (!company)
                return res.status(404).json({ error: "Company not found" });
            res.json(company);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async update(req, res) {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({ error: "Authentication required" });
            }
            const { id } = req.params;
            if (user.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ error: "Access denied. Only SUPER_ADMIN can update companies." });
            }
            const company = await CompanyService.updateCompany(id, req.body);
            res.json(company);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({ error: "Authentication required" });
            }
            const { id } = req.params;
            if (user.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ error: "Access denied. Only SUPER_ADMIN can delete companies." });
            }
            await CompanyService.deleteCompany(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=company.controller.js.map