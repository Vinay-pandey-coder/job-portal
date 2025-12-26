import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_ENDPOINT, JOB_API_ENDPOINT } from "../../utils/data";
import { setSingleJob } from "../..//redux/jobslice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const Description = () => {
  const params = useParams();
  const jobId = params.id;

  const { singleJob } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.auth);

  const isIntiallyApplied =
  singleJob?.application?.some(
    (application) => application.applicant === user?._id
  ) || false;
  const [isApplyed, setIsApplyed] = useState(isIntiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setIsApplyed(true)
        const updateSinglejob = {...singleJob,applications:[...singleJob.applications,{
          applicant:user?._id
        }]}
        dispatch(setSingleJob(updateSinglejob))
        console.log(res.data);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });

        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplyed(res.data.job.applications.some(applications => applications.applicant === user?._id))
        }else{
          setError("Failed to fetch jobs.")
        }
        console.log(res.data.job);
      } catch (error) {
        console.log(error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJobs();
  }, [jobId, dispatch, user?._id]);

  if (!singleJob) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto my-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-xl ">{singleJob?.title}</h1>
              <div className=" flex gap-2 items-center mt-4 ">
                <Badge className={" text-blue-600 font-bold"} variant={"ghost"}>
                  {singleJob?.position} Open Positions
                </Badge>
                <Badge
                  className={" text-[#FA4F09] font-bold"}
                  variant={"ghost"}
                >
                  {singleJob?.salary}
                </Badge>
                <Badge
                  className={" text-[#6B3AC2]  font-bold"}
                  variant={"ghost"}
                >
                  {singleJob?.location}
                </Badge>
                <Badge className={" text-black font-bold"} variant={"ghost"}>
                  {singleJob?.jobType}
                </Badge>
              </div>
            </div>
            <div>
              <Button
                onClick={isApplyed ? null : applyJobHandler}
                disabled={isApplyed}
                className={`rounded-lg ${
                  isApplyed
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-[#6B3AC2] hover:bg-[#552d9b] cursor-pointer"
                }`}
              >
                {isApplyed ? "Already Applied" : "Apply Now"}
              </Button>
            </div>
          </div>
          <h1 className="border-b-2 border-b-gray-400 font-medium py-4">
            {singleJob?.description}
          </h1>
          <div className="my-4">
            <h1 className="font-bold my-1 ">
              Role:{" "}
              <span className=" pl-4 font-normal text-gray-800">
                {singleJob?.position} Open Positions
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Location:{" "}
              <span className=" pl-4 font-normal text-gray-800">
                {" "}
                {singleJob?.location}
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Salary:{" "}
              <span className=" pl-4 font-normal text-gray-800">
                {singleJob?.salary}
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Experience:{" "}
              <span className=" pl-4 font-normal text-gray-800">
                {singleJob?.experienceLevel} Year
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Total Applicants:{" "}
              <span className=" pl-4 font-normal text-gray-800">
                {singleJob?.applications?.length}
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Job Type:
              <span className=" pl-4 font-normal text-gray-800">
                {singleJob?.jobType}
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Post Date:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.createdAt.split("T")[0]}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
