import jwt, {} from "jsonwebtoken";
import { env } from "../config/env.js";
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};
export const verifyToken = (token) => {
    return jwt.verify(token, env.JWT_SECRET);
};
//# sourceMappingURL=jwt.js.map