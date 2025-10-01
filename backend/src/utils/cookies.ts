import type { Response } from "express"
import { env } from "../config/env.js"

export const setAuthCookie = (res: Response, token: string): void => {
  const isProduction = env.NODE_ENV === "production"

  res.cookie(env.COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  })
}

export const clearAuthCookie = (res: Response): void => {
  res.clearCookie(env.COOKIE_NAME, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  })
}
