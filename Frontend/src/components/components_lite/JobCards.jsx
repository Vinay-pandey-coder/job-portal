import React from "react";
import { Badge } from "../ui/badge";

const JobCards = () => {
  return (
    <>
      <div className="p-5 rounded-md bg-white border border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3">
        <div>
          <h1 className="text-lg font-medium">Companu Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
        <div>
          <h2 className="font-bold text-lg my-2">Job Title</h2>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde sequi delectus porro?
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
    </>
  );
};

export default JobCards;
