import type { Request, Response, NextFunction } from "express"
import { logger } from "../utils/logger.js"

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now()

  // Log request
  logger.info(`${req.method} ${req.url}`, {
    ip: req.ip,
    userAgent: req.get("User-Agent"),
    userId: req.user?.id,
  })

  // Log response when finished
  res.on("finish", () => {
    const duration = Date.now() - start
    logger.info(`${req.method} ${req.url} - ${res.statusCode}`, {
      duration: `${duration}ms`,
      statusCode: res.statusCode,
      userId: req.user?.id,
    })
  })

  next()
}
