import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-4 sm:p-5 rounded-md bg-white border border-gray-200 cursor-pointer
      transition-all duration-300 ease-in-out transform-gpu will-change-transform
      hover:shadow-2xl hover:shadow-blue-200 hover:scale-105"
    >
      {/* Company */}
      <div>
        <h1 className="text-base sm:text-lg font-medium">
          {job?.company?.name}
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">India</p>
      </div>

      {/* Job Info */}
      <div className="mt-2">
        <h2 className="font-bold text-base sm:text-lg my-1">
          {job?.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 items-center mt-4 text-xs sm:text-sm">
        <Badge className="text-blue-600 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#FA4F09] font-bold" variant="ghost">
          {job?.salary}
        </Badge>
        <Badge className="text-[#6B3AC2] font-bold" variant="ghost">
          {job?.location}
        </Badge>
        <Badge className="text-black font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
