import dotenv from "dotenv"
import { z } from "zod"

dotenv.config()

const envSchema = z.object({
  DATABASE_URL: z.string(),

  DB_HOST: z.string(),
  DB_PORT: z.string().transform(Number),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_DRIVER: z.string(),

  PORT: z.string().transform(Number),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
  JWT_EXPIRES_IN: z.string().default("7d"),
  COOKIE_NAME: z.string().default("auth-token"),

});

export const env = envSchema.parse(process.env);
