import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  APPLICATION_API_ENDPOINT,
  JOB_API_ENDPOINT,
} from "../../utils/data";
import { setSingleJob } from "../../redux/jobslice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const Description = () => {
  const { id: jobId } = useParams();
  const dispatch = useDispatch();

  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isInitiallyApplied =
    singleJob?.applications?.some(
      (app) => app.applicant === user?._id
    ) || false;

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true);

        dispatch(
          setSingleJob({
            ...singleJob,
            applications: [
              ...(singleJob?.applications || []),
              { applicant: user?._id },
            ],
          })
        );

        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to apply");
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${JOB_API_ENDPOINT}/get/${jobId}`,
          { withCredentials: true }
        );

        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications?.some(
              (app) => app.applicant === user?._id
            )
          );
        } else {
          setError("Failed to fetch job details");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!singleJob) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-bold text-xl">{singleJob.title}</h1>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="ghost" className="text-blue-600 font-bold">
              {singleJob.position} Openings
            </Badge>
            <Badge variant="ghost" className="text-[#FA4F09] font-bold">
              {singleJob.salary} LPA
            </Badge>
            <Badge variant="ghost" className="text-[#6B3AC2] font-bold">
              {singleJob.location}
            </Badge>
            <Badge variant="ghost" className="text-black font-bold">
              {singleJob.jobType}
            </Badge>
          </div>
        </div>

        <Button
          onClick={!isApplied ? applyJobHandler : undefined}
          disabled={isApplied}
          className={`w-full md:w-auto rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#6B3AC2] hover:bg-[#552d9b]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      {/* Description */}
      <h2 className="border-b border-gray-300 font-medium py-4 mt-6">
        {singleJob.description}
      </h2>

      {/* Job Info */}
      <div className="mt-4 space-y-2 text-sm md:text-base">
        <p>
          <span className="font-bold">Role:</span>{" "}
          <span className="text-gray-700">
            {singleJob.position} Positions
          </span>
        </p>

        <p>
          <span className="font-bold">Location:</span>{" "}
          <span className="text-gray-700">{singleJob.location}</span>
        </p>

        <p>
          <span className="font-bold">Salary:</span>{" "}
          <span className="text-gray-700">{singleJob.salary} LPA</span>
        </p>

        <p>
          <span className="font-bold">Experience:</span>{" "}
          <span className="text-gray-700">
            {singleJob.experienceLevel} Years
          </span>
        </p>

        <p>
          <span className="font-bold">Total Applicants:</span>{" "}
          <span className="text-gray-700">
            {singleJob.applications?.length}
          </span>
        </p>

        <p>
          <span className="font-bold">Job Type:</span>{" "}
          <span className="text-gray-700">{singleJob.jobType}</span>
        </p>

        <p>
          <span className="font-bold">Post Date:</span>{" "}
          <span className="text-gray-700">
            {singleJob.createdAt?.split("T")[0]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
