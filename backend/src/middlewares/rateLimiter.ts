import type { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/AppError.js"

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

export const rateLimiter = (options: {
  windowMs: number
  maxRequests: number
  message?: string
}) => {
  const { windowMs, maxRequests, message = "Too many requests" } = options

  return (req: Request, res: Response, next: NextFunction): void => {
    const key = req.ip || "unknown"
    const now = Date.now()

    // Clean up expired entries
    if (store[key] && now > store[key].resetTime) {
      delete store[key]
    }

    // Initialize or increment counter
    if (!store[key]) {
      store[key] = {
        count: 1,
        resetTime: now + windowMs,
      }
    } else {
      store[key].count++
    }

    // Check if limit exceeded
    if (store[key].count > maxRequests) {
      const resetTime = Math.ceil((store[key].resetTime - now) / 1000)
      res.set({
        "X-RateLimit-Limit": maxRequests.toString(),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": resetTime.toString(),
      })
      throw new AppError(message, 429)
    }

    // Set rate limit headers
    res.set({
      "X-RateLimit-Limit": maxRequests.toString(),
      "X-RateLimit-Remaining": (maxRequests - store[key].count).toString(),
      "X-RateLimit-Reset": Math.ceil((store[key].resetTime - now) / 1000).toString(),
    })

    next()
  }
}

// Predefined rate limiters
export const authLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // 5 attempts per window
  message: "Too many authentication attempts, please try again later",
})

export const generalLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // 100 requests per window
})
