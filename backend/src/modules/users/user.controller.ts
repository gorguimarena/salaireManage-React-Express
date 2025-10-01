import type { Request, Response, NextFunction } from "express"
import { UserService } from "./user.service.js"
import { registerSchema, loginSchema, updateUserSchema } from "./user.schema.js"
import { setAuthCookie, clearAuthCookie } from "../../utils/cookies.js"
import { AppError } from "../../utils/AppError.js"

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedData = registerSchema.parse(req.body)
      const { user } = await UserService.register(validatedData)

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: { user },
      })
    } catch (error) {
      next(error)
    }
  }

  static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedData = loginSchema.parse(req.body)
      const { user, token } = await UserService.login(validatedData)

      setAuthCookie(res, token)

      res.json({
        user,
        token,
      })
    } catch (error) {
      next(error)
    }
  }

  static async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      clearAuthCookie(res)

      res.json({
        success: true,
        message: "Logout successful",
      })
    } catch (error) {
      next(error)
    }
  }

  static async getMe(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user) {
        throw new AppError("User not authenticated", 401)
      }

      res.json({
        success: true,
        data: { user: req.user },
      })
    } catch (error) {
      next(error)
    }
  }

 static async updateMe(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     if (!req.user) {
       throw new AppError("User not authenticated", 401)
     }

     const validatedData = updateUserSchema.parse(req.body)
     const user = await UserService.updateUser(req.user.id, validatedData)

     res.json({
       success: true,
       message: "Profile updated successfully",
       data: { user },
     })
   } catch (error) {
     next(error)
   }
 }

 static async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     if (!req.user) {
       throw new AppError("Authentication required", 401)
     }

     const users = req.user.role === 'SUPER_ADMIN'
       ? await UserService.getAllUsers()
       : await UserService.getUsersByCompany(req.user.companyId!)

     res.json({
       success: true,
       data: { users, count: users.length },
     })
   } catch (error) {
     next(error)
   }
 }

 static async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     if (!req.user) {
       throw new AppError("Authentication required", 401)
     }

     const { id } = req.params
     if (!id) {
       throw new AppError("User ID is required", 400);
     }

     const user = await UserService.getUserById(id)

     // Check if user can access this user
     if (req.user.role !== 'SUPER_ADMIN' && user.companyId !== req.user.companyId) {
       throw new AppError("Access denied", 403)
     }

     res.json({
       success: true,
       data: { user },
     })
   } catch (error) {
     next(error)
   }
 }

 static async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     if (!req.user) {
       throw new AppError("Authentication required", 401)
     }

     const { id } = req.params
     if (!id) {
       throw new AppError("User ID is required", 400);
     }

     // Get current user to check company
     const currentUser = await UserService.getUserById(id)
     if (req.user.role !== 'SUPER_ADMIN' && currentUser.companyId !== req.user.companyId) {
       throw new AppError("Access denied", 403)
     }

     const validatedData = updateUserSchema.parse(req.body)
     const user = await UserService.updateUser(id, validatedData)

     res.json({
       success: true,
       message: "User updated successfully",
       data: { user },
     })
   } catch (error) {
     next(error)
   }
 }

 static async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     if (!req.user) {
       throw new AppError("Authentication required", 401)
     }

     const { id } = req.params
     if (!id) {
       throw new AppError("User ID is required", 400);
     }

     // Get current user to check company
     const currentUser = await UserService.getUserById(id)
     if (req.user.role !== 'SUPER_ADMIN' && currentUser.companyId !== req.user.companyId) {
       throw new AppError("Access denied", 403)
     }

     await UserService.deleteUser(id)

     res.json({
       success: true,
       message: "User deleted successfully",
     })
   } catch (error) {
     next(error)
   }
 }

 static async getUsersByCompany(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const { companyId } = req.params
     if (!companyId) {
       throw new AppError("Company ID is required", 400);
     }

     const users = await UserService.getUsersByCompany(companyId)

     res.json({
       success: true,
       data: { users, count: users.length },
     })
   } catch (error) {
     next(error)
   }
 }

 static async createUserForCompany(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const { companyId } = req.params
     if (!companyId) {
       throw new AppError("Company ID is required", 400);
     }

     const userData = { ...req.body, companyId }
     const validatedData = registerSchema.parse(userData)
     const { user } = await UserService.register(validatedData)

     res.status(201).json({
       success: true,
       message: "User created successfully",
       data: { user },
     })
   } catch (error) {
     next(error)
   }
 }

 static async updateUserForCompany(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const { companyId, userId } = req.params
     if (!companyId || !userId) {
       throw new AppError("Company ID and User ID are required", 400);
     }

     const validatedData = updateUserSchema.parse(req.body)
     const user = await UserService.updateUser(userId, validatedData)

     res.json({
       success: true,
       message: "User updated successfully",
       data: { user },
     })
   } catch (error) {
     next(error)
   }
 }

 static async deleteUserForCompany(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const { companyId, userId } = req.params
     if (!companyId || !userId) {
       throw new AppError("Company ID and User ID are required", 400);
     }

     await UserService.deleteUser(userId)

     res.json({
       success: true,
       message: "User deleted successfully",
     })
   } catch (error) {
     next(error)
   }
 }

 static async getRoles(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const roles = await UserService.getRoles()

     res.json({
       success: true,
       data: { roles },
     })
   } catch (error) {
     next(error)
   }
 }
}
