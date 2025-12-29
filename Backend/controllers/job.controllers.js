import { Job } from "../models/job.model.js";

//Admin job posting
export const postjob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      location,
      salary,
      jobType,
      position,
      companyId,
      experience,
    } = req.body;

    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !location ||
      !salary ||
      !jobType ||
      !position ||
      !companyId ||
      !experience
    ) {
      return res
        .status(400)
        .json({ message: "Please fill the all filed", status: false });
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      location,
      salary: Number(salary),
      jobType,
      position,
      company: companyId,
      experienceLevel: experience,
      created_by: userId,
    });
    return res
      .status(200)
      .json({ message: "job create successfully", job, status: true });
  } catch (error) {
    console.log(error);
  }
};

//Users
export const getAlljobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({ message: "job not found", status: false });
    }
    res.status(200).json({ jobs, status: true });
  } catch (error) {
    console.log(error);
  }
};

// users
export const getJobById = async (req, res) => {
  try {
    const jobid = req.params.id;
    const job = await Job.findById(jobid).populate({
      path: "applications",
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found", status: false });
    }
    return res.status(200).json({ job, status: true });
  } catch (error) {
    console.log(error);
  }
};

// Admin job create
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const Jobs = await Job.find({ created_by: adminId }).populate({
      path:"company",
      sort:{createdAt: -1},
    })
    if (!Jobs) {
      return res.status(404).json({ message: "No Jobs Found", status: false });
    }
    return res.status(200).json({ Jobs, status: true });
  } catch (error) {
    console.log(error);
  }
};
