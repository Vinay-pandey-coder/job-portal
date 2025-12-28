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

  const {
    company,
    title,
    description,
    position,
    salary,
    location,
    jobType,
    _id,
  } = job;
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  return (
    <>
      <div className="p-5 rounded-md bg-white border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out transform-gpu will-change-transform hover:shadow-2xl hover:shadow-blue-200 hover:scale-105">
        <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
          <Button
            variant="outline"
            className={"rounded-full cursor-pointer"}
            size="icon"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            {isBookmarked ? <BookMarked /> : <Bookmark />}
          </Button>
        </div>

        <div className="flex items-center gap-2 my-2">
          <Button className={"p-6"} variant="outline" size="icon">
            <Avatar>
              <AvatarImage src="https://images.seeklogo.com/logo-png/25/2/microsoft-logo-png_seeklogo-258454.png" />
            </Avatar>
          </Button>
          <div>
            <h1 className="text-lg font-medium">{job?.company?.name}</h1>
            <p className="text-sm text-gray-600">India</p>
          </div>
        </div>

        <div>
          <div>
            <h2 className="font-bold text-lg my-2">{job?.title}</h2>
            <p className="text-sm text-gray-600">{job?.description}</p>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
              {job?.position} Positions
            </Badge>
            <Badge className={"text-[#E35B14] font-bold"} variant={"ghost"}>
              {job?.salary}
            </Badge>
            <Badge className={"text-[#6B3AC2] font-bold"} variant={"ghost"}>
              {job?.location}
            </Badge>
            <Badge className={"text-black font-bold"} variant={"ghost"}>
              {job?.jobType}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <Button
            onClick={() => {
              navigate(`/description/${job?._id}`);
            }}
            variant="outline"
            className={"rounded-sm cursor-pointer font-bold"}
          >
            Details
          </Button>
          <Button
            variant="outline"
            className={
              "rounded-sm cursor-pointer bg-[#6B3AC2] text-white font-bold"
            }
          >
            Save For Later
          </Button>
        </div>
      </div>
    </>
  );
};

export default Job;
