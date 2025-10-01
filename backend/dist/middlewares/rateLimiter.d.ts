import type { Request, Response, NextFunction } from "express";
export declare const rateLimiter: (options: {
    windowMs: number;
    maxRequests: number;
    message?: string;
}) => (req: Request, res: Response, next: NextFunction) => void;
export declare const authLimiter: (req: Request, res: Response, next: NextFunction) => void;
export declare const generalLimiter: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=rateLimiter.d.ts.map