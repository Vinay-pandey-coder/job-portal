import express from "express";
import authenticateToken from "../middleware/isAuthenticated.js";
import { applyjobs, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controllers.js";


const router = express.Router();

router.route("/apply/:id").get(authenticateToken, applyjobs);
router.route("/get").get(authenticateToken, getAppliedJobs);
router.route("/:id/applicants").get(authenticateToken, getApplicants);
router.route("/status/:id/update").post(authenticateToken, updateStatus);

export default router;