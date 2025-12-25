import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Description = () => {
  const isApplyed = true;

  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto my-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-xl">Title</h1>
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
            <div>
              <Button
                disabled={isApplyed}
                className={`rounded-lg ${
                  isApplyed
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-[#6B3AC2] hover:bg-[#552d9b] cursor-pointer"
                }`}
              >
                {isApplyed ? "Already Applied" : "Apply Now"}
              </Button>
            </div>
          </div>
          <h1 className="border-b-2 border-b-gray-400 font-medium py-4">
            Job Description
          </h1>
          <div className="my-4">
            <h1 className="font-bold my-1">
              Role:
              <span className="pl-4 font-normal text-gray-800">Developer</span>
            </h1>
            <h1 className="font-bold my-1">
              Location:
              <span className="pl-4 font-normal text-gray-800">Noida</span>
            </h1>
            <h1 className="font-bold my-1">
              Salary:
              <span className="pl-4 font-normal text-gray-800">
                20,000 - 35,000
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Experiene:
              <span className="pl-4 font-normal text-gray-800">3+ years</span>
            </h1>
            <h1 className="font-bold my-1">
              Job Type:
              <span className="pl-4 font-normal text-gray-800">Full Time</span>
            </h1>
            <h1 className="font-bold my-1">
              Total Aplicant:
              <span className="pl-4 font-normal text-gray-800">10</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
