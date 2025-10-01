import { Router } from "express"
import { CompanyController } from "./company.controller.js";
import { authorize } from "../../middlewares/auth.js";
import { uploadCompanyLogo } from "../../config/multer.js";

const router = Router();
router.use(authorize("ADMIN", "SUPER_ADMIN"))
router.get("/:id", CompanyController.getById);

router.use(authorize("SUPER_ADMIN"))
router.post("/", uploadCompanyLogo, CompanyController.create);
router.get("/", CompanyController.getAll);
router.put("/:id", CompanyController.update);
router.delete("/:id", CompanyController.delete);

export default router;

