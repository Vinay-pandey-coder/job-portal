import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../../redux/jobslice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "frontend",
      "backend",
      "mobile",
      "desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filter = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  const handleToggle = (filterType) => {
    setActiveFilter(activeFilter === filterType ? null : filterType);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div
      className="
        w-full lg:w-60
        bg-white rounded-md p-4
        border border-gray-200
        shadow-sm
      "
    >
      <h1 className="font-bold text-base sm:text-lg">Filter Jobs</h1>
      <hr className="my-3" />

      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        {filterData.map((data, index) => (
          <div key={index} className="mb-4">
            {/* Filter Heading */}
            <h2
              onClick={() => handleToggle(data.filterType)}
              className="
                font-semibold text-sm sm:text-md
                cursor-pointer flex justify-between items-center
              "
            >
              {data.filterType}
              <span className="text-lg">
                {activeFilter === data.filterType ? "-" : "+"}
              </span>
            </h2>

            {/* Filter Options */}
            {activeFilter === data.filterType && (
              <div className="mt-2">
                {data.array.map((item, indx) => {
                  const id = `${data.filterType}-${indx}`;
                  return (
                    <div
                      key={id}
                      className="
                        flex items-center space-x-2
                        my-2 ml-2 text-sm
                      "
                    >
                      <RadioGroupItem value={item} id={id} />
                      <label
                        htmlFor={id}
                        className="cursor-pointer select-none"
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filter;
