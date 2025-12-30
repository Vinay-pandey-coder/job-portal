import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "../../redux/jobslice";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/Browser");
  };

  return (
    <div className="px-4">
      <div className="text-center">
        <div className="flex flex-col gap-6 my-10">

          {/* Badge */}
          <span className="px-4 py-2 rounded-full mx-auto bg-gray-100 text-red-600 font-medium flex gap-2 items-center text-sm md:text-base">
            <span className="text-[#5A392E]">
              <PiBuildingOfficeBold />
            </span>
            No.1 Job Hunt Website
          </span>

          {/* Heading */}
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Search, Apply & <br />
            Get Your <span className="text-[#6B3AC2]">Dream Job</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Start your hunt for the best life-changing career opportunities from
            here in your selected area conveniently and easily.
          </p>

          {/* Search Box */}
          <div className="flex w-full sm:w-[80%] md:w-[50%] lg:w-[40%] shadow-lg border border-gray-300 pl-4 rounded-full items-center gap-3 mx-auto">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className="outline-none border-none w-full text-sm sm:text-base"
            />
            <Button
              onClick={searchjobHandler}
              className="rounded-full px-5"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
