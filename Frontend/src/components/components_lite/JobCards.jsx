import React from "react";
import { Badge } from "../ui/badge";

const JobCards = ({ job }) => {
  return (
    <>
      <div className="p-5 rounded-md bg-white border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out transform-gpu will-change-transform hover:shadow-2xl hover:shadow-blue-200 hover:scale-105">
        <div>
          <h1 className="text-lg font-medium">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
        <div>
          <h2 className="font-bold text-lg my-2">{job?.title}</h2>
          <p className="text-sm text-gray-600">{job?.description}</p>
        </div>
        <div className="flex gap-2 items-center mt-4">
        <Badge className={" text-blue-600 font-bold"} variant={"ghost"}>
          {job?.position} Positions
        </Badge>
        <Badge className={" text-[#FA4F09] font-bold"} variant={"ghost"}>
          {job?.salary}
        </Badge>
        <Badge className={" text-[#6B3AC2]  font-bold"} variant={"ghost"}>
          {job?.location}
        </Badge>
        <Badge className={" text-black font-bold"} variant={"ghost"}>
          {job?.jobType}
        </Badge>
        </div>
      </div>
    </>
  );
};

export default JobCards;
