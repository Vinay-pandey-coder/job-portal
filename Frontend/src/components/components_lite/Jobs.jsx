import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./FilterCard.jsx";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(allJobs);
      return;
    }

    const query = searchedQuery.toLowerCase();
    const filteredJobs = allJobs.filter((job) =>
      job.title?.toLowerCase().includes(query) ||
      job.description?.toLowerCase().includes(query) ||
      job.location?.toLowerCase().includes(query) ||
      job.experienceLevel?.toString().includes(query) ||
      job.salary?.toLowerCase().includes(query)
    );

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="flex flex-col lg:flex-row gap-5">

          {/* Filter Section */}
          <div className="w-full lg:w-1/5">
            <FilterCard />
          </div>

          {/* Jobs Section */}
          <div className="flex-1">
            {filterJobs.length === 0 ? (
              <span className="text-gray-500">Job not found</span>
            ) : (
              <div className="h-auto lg:h-[88vh] overflow-y-auto overflow-x-hidden pb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterJobs.map((job) => (
                    <motion.div
                      key={job._id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Job job={job} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Jobs;
