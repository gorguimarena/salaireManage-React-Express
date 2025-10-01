export interface User {
  id: string;
  email: string;
  role: string;
  companyId: string | null;
}

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}
