import React from "react";
import Navbar from "./Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
];

const Jobs = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto mt-5">
          <div className="flex gap-5">
            <div className="w-[15%]">
              <FilterCard />
            </div>

            {jobsArray.length <= 0 ? (
              <span className="">Job Not Found</span>
            ) : (
              <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-3 gap-4">
                  {jobsArray.map((job, index) => (
                    <Job key={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
