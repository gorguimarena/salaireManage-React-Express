import { Router } from "express"
import { UserController } from "./user.controller.js"
import { authenticate, authorize } from "../../middlewares/auth.js";

// Middleware pour vérifier les permissions d'entreprise
const checkCompanyAccess = (req: any, res: any, next: any) => {
  const user = req.user;
  const companyId = req.params.companyId;

  // Super Admin peut gérer toutes les entreprises
  if (user.role === "SUPER_ADMIN") {
    return next();
  }
  // Admin ne peut gérer que sa propre entreprise
  if (user.role === "ADMIN" && user.companyId === companyId) {
    return next();
  }
  return res.status(403).json({ error: "Insufficient permissions" });
};

const router = Router()

router.post("/login", UserController.login)
router.post("/logout", UserController.logout)

router.use(authenticate);

// Routes accessibles à tous les utilisateurs authentifiés
router.get("/me", UserController.getMe);
router.put("/me", UserController.updateMe);
router.get("/roles", UserController.getRoles);

// Routes Super Admin uniquement
router.post("/register", authorize("SUPER_ADMIN"), UserController.register);
router.get("/all", authorize("SUPER_ADMIN"), UserController.getAllUsers);
router.get("/:id", authorize("SUPER_ADMIN"), UserController.getUserById);
router.put("/:id", authorize("SUPER_ADMIN"), UserController.updateUser);
router.delete("/:id", authorize("SUPER_ADMIN"), UserController.deleteUser);

// Routes pour gérer les utilisateurs d'une entreprise spécifique (Super Admin + Admin)
router.get("/company/:companyId", checkCompanyAccess, UserController.getUsersByCompany);
router.post("/company/:companyId", checkCompanyAccess, UserController.createUserForCompany);
router.put("/company/:companyId/:userId", checkCompanyAccess, UserController.updateUserForCompany);
router.delete("/company/:companyId/:userId", checkCompanyAccess, UserController.deleteUserForCompany);

export { router as userRoutes }
