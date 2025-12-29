import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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

const FilterCard = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleClick = (filterType) => {
    setActiveFilter(activeFilter === filterType ? null : filterType);
  };

  return (
    <>
        <div className="w-full">
          <h1 className="font-bold text-lg">Filter Jobs</h1>
          <hr className="my-3" />

          {filterData.map((data, i) => (
            <div key={i} className="mb-4">
              <h2
                onClick={() => handleClick(data.filterType)}
                className="font-bold text-md cursor-pointer flex justify-between items-center"
              >
                {data.filterType}
                <span>{activeFilter === data.filterType ? "-" : "+"}</span>
              </h2>

              {/* RADIO GROUP */}
              {activeFilter === data.filterType && (
                <RadioGroup className="mt-2">
                  {data.array.map((item, idx) => {
                    const id = `${data.filterType}-${idx}`;
                    return (
                      <div
                        key={id}
                        className="flex items-center space-x-2 my-1"
                      >
                        <RadioGroupItem value={item} id={id} />
                        <label htmlFor={id} className="cursor-pointer">
                          {item}
                        </label>
                      </div>
                    );
                  })}
                </RadioGroup>
              )}
            </div>
          ))}
        </div>
    </>
  );
};

export default FilterCard;
