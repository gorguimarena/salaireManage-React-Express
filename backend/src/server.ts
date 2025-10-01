import app from "./app.js"
import { env } from "./config/env.js"
import { logger } from "./utils/logger.js"
import prisma from "./config/database.js"

const startServer = async () => {
  try {
    // Test database connection
    await prisma.$connect()
    logger.info("Database connected successfully")

    // Start server
    app.listen(env.PORT, () => {
      logger.info(`Server running on port ${env.PORT} in ${env.NODE_ENV} mode`)
      logger.info(`Health check: http://localhost:${env.PORT}/health`)
    })
  } catch (error) {
    logger.error("Failed to start server:", error)
    process.exit(1)
  }
}

// Graceful shutdown
process.on("SIGINT", async () => {
  logger.info("Shutting down server...")
  await prisma.$disconnect()
  process.exit(0)
})

process.on("SIGTERM", async () => {
  logger.info("Shutting down server...")
  await prisma.$disconnect()
  process.exit(0)
})

startServer()
