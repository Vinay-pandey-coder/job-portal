import React from "react";
import JobCards from "./JobCards";

const rendomJob = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const LatestJobs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto my-20">
        <h2 className="text-4xl font-bold">
          <span className="text-[#6B3AC2]">Latest & Top </span>Job Openings
        </h2>

        <div className="grid grid-cols-3 gap-4 my-5">
          {rendomJob.slice(0, 6).map((job, ind) => (
            <JobCards ></JobCards>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
