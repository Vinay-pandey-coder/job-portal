import express from "express";
import authenticateToken from "../middleware/isAuthenticated.js";
import {
  getAllCompanies,
  getCompanyById,
  registercomany,
  updateCompany,
} from "../controllers/company.controllers.js";
import { singleUpload } from '../middleware/multer.js'

const router = express.Router();

router.route("/register").post(authenticateToken, registercomany);
router.route("/get").get(authenticateToken, getAllCompanies);
router.route("/get/:id").get(authenticateToken, getCompanyById);
router.route("/update/:id").put(authenticateToken, singleUpload, updateCompany);

export default router;