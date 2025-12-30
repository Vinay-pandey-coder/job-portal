import React from "react";
import { Button } from "../ui/button";
import { Bookmark, BookMarked } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  const [isBookmarked, setIsBookmarked] = React.useState(false);

  return (
    <div
      className="p-4 sm:p-5 rounded-md bg-white border border-gray-200 cursor-pointer
      transition-all duration-300 ease-in-out transform-gpu will-change-transform
      hover:shadow-2xl hover:shadow-blue-200 hover:scale-105"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          {isBookmarked ? <BookMarked /> : <Bookmark />}
        </Button>
      </div>

      {/* Company */}
      <div className="flex items-center gap-3 my-3">
        <Button variant="outline" size="icon" className="p-5 sm:p-6">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>

        <div>
          <h1 className="text-base sm:text-lg font-medium">
            {job?.company?.name}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">India</p>
        </div>
      </div>

      {/* Job Info */}
      <div>
        <h2 className="font-bold text-base sm:text-lg my-1">
          {job?.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
          {job?.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 items-center mt-4 text-xs sm:text-sm">
          <Badge className="text-blue-700 font-bold" variant="ghost">
            {job?.position} Open Positions
          </Badge>
          <Badge className="text-[#E35B14] font-bold" variant="ghost">
            {job?.salary} LPA
          </Badge>
          <Badge className="text-[#6B3AC2] font-bold" variant="ghost">
            {job?.location}
          </Badge>
          <Badge className="text-black font-bold" variant="ghost">
            {job?.jobType}
          </Badge>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="font-bold w-full sm:w-auto"
        >
          Details
        </Button>

        <Button
          variant="outline"
          className="bg-[#6B3AC2] text-white font-bold w-full sm:w-auto"
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
