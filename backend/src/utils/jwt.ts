import jwt, { type SignOptions } from "jsonwebtoken"
import { env } from "../config/env.js"


interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  companyId?: string | null;
}

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h"; 

export const generateToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};


export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, env.JWT_SECRET) as JWTPayload
}
