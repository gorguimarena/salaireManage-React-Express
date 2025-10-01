interface JWTPayload {
    userId: string;
    email: string;
    role: string;
    companyId?: string | null;
}
export declare const generateToken: (payload: JWTPayload) => string;
export declare const verifyToken: (token: string) => JWTPayload;
export {};
//# sourceMappingURL=jwt.d.ts.map