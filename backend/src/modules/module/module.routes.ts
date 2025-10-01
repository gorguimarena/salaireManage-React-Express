import { Router } from "express"

const router = Router()

// // Public routes
// router.post("/register", UserController.register)
// router.post("/login", UserController.login)
// router.post("/logout", UserController.logout)

// // Protected routes
// router.get("/me", authenticate, UserController.getMe)
// router.put("/me", authenticate, UserController.updateMe)

// // Admin routes
// router.get("/", authenticate, authorize("ADMIN"), UserController.getAllUsers)
// router.get("/:id", authenticate, authorize("ADMIN"), UserController.getUserById)
// router.delete("/:id", authenticate, authorize("ADMIN"), UserController.deleteUser)

export { router as moduleRoutes }
