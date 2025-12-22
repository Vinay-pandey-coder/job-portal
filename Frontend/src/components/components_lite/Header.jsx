import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <div className="flex flex-col gap-5 my-10">
            <span className="px-4 py-2 rounded-full mx-auto bg-gray-100 text-red-600 font-medium flex gap-3 items-center">
              <span className="text-[#5A392E]">
                <PiBuildingOfficeBold />
              </span>{" "}
              No.1 Job Hunt Website
            </span>

            <h2 className="font-bold text-5xl">
              Search,Apply & <br />
              Get Your <span className="text-[#6B3AC2]">Dream Job</span>{" "}
            </h2>
            <p>
              Start your ht for he best Me-changing coree cppartunie rom here in
              your <br /> Sected oreo convener an gs red uly.
            </p>

            <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
              <input
                type="text"
                placeholder="Find Your Dream Job"
                className="outline-none border-none w-full h-12"
              />
              <Button className={"rounded-full mr-3"}>
                <Search />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
