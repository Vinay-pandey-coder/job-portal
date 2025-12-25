import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();

  const jobId = "vinay"

  return (
    <>
      <div className="p-5 rounded-md bg-white border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out transform-gpu will-change-transform hover:shadow-2xl hover:shadow-blue-200 hover:scale-105">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">3 days ago</p>
          <Button
            variant="outline"
            className={"rounded-full cursor-pointer"}
            size="icon"
          >
            <Bookmark />
          </Button>
        </div>

        <div className="flex items-center gap-2 my-2">
          <Button className={"p-6"} variant="outline" size="icon">
            <Avatar>
              <AvatarImage src="https://images.seeklogo.com/logo-png/25/2/microsoft-logo-png_seeklogo-258454.png" />
            </Avatar>
          </Button>
          <div>
            <h1 className="text-lg font-medium">Companu Name</h1>
            <p className="text-sm text-gray-600">India</p>
          </div>
        </div>

        <div>
          <div>
            <h2 className="font-bold text-lg my-2">Job Title</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              unde sequi delectus porro?
            </p>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
              10 Position
            </Badge>
            <Badge className={"text-[#E35B14] font-bold"} variant={"ghost"}>
              20 LPA
            </Badge>
            <Badge className={"text-[#6B3AC2] font-bold"} variant={"ghost"}>
              Remote
            </Badge>
            <Badge className={"text-black font-bold"} variant={"ghost"}>
              Full Time
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <Button
            onClick={() => {
              navigate(`/description/${jobId}`);
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
