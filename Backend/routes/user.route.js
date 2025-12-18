import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controllers.js";
import authenticateToken from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(authenticateToken,updateProfile);
router.route("/logout").post(logout);


export default router;