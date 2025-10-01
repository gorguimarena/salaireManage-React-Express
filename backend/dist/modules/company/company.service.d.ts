import type { CreateCompanyInput } from "./company.schema.js";
export declare class CompanyService {
    static createCompany(data: CreateCompanyInput): Promise<{
        name: string;
        id: string;
        logoUrl: string | null;
        address: string | null;
        currency: string;
        primaryColor: string;
        secondaryColor: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static getAllCompanies(): Promise<{
        name: string;
        id: string;
        logoUrl: string | null;
        address: string | null;
        currency: string;
        primaryColor: string;
        secondaryColor: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    static getCompanyById(id: string): Promise<{
        name: string;
        id: string;
        logoUrl: string | null;
        address: string | null;
        currency: string;
        primaryColor: string;
        secondaryColor: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    static updateCompany(id: string, data: any): Promise<{
        name: string;
        id: string;
        logoUrl: string | null;
        address: string | null;
        currency: string;
        primaryColor: string;
        secondaryColor: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static deleteCompany(id: string): Promise<{
        name: string;
        id: string;
        logoUrl: string | null;
        address: string | null;
        currency: string;
        primaryColor: string;
        secondaryColor: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=company.service.d.ts.map