

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
    const job = await createImageBitmap({
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
      .json({ message: "job create successfully", status: true, job });
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
        { requirements: { $regex: keyword, $options: "i" } },
        { location: { $regex: keyword, $options: "i" } },
        { jobType: { $regex: keyword, $options: "i" } },
        { position: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await job.find(query)
    if (!jobs) {
     return res.status(404).json({message:"job not found",status:false})
    }
    res.status(404).json({jobs,status:true})
  } catch (error) {
    console.log(error);
  }
};


