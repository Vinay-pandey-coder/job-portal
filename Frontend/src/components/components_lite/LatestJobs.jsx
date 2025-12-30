import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((state) => state.job);

  return (
    <div className="max-w-7xl mx-auto my-14 px-4">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
        <span className="text-[#6B3AC2]">Latest & Top </span>
        Job Openings
      </h2>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {allJobs.length === 0 ? (
          <span className="col-span-full text-center text-gray-500">
            No Job Available
          </span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) => <JobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
