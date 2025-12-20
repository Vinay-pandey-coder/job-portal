import express from "express";
import authenticateToken from "../middleware/isAuthenticated.js";
import {
  getAdminJobs,
  getAlljobs,
  getJobById,
  postjob,
} from "../controllers/job.controllers.js";

const router = express.Router();

router.route("/post").post(authenticateToken, postjob);
router.route("/get").get(authenticateToken, getAlljobs);
router.route("/getadminjobs").get(authenticateToken,getAdminJobs);
router.route("/get/:id").get(authenticateToken, getJobById);

export default router;
