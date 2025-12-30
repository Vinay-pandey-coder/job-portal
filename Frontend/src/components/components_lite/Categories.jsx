import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../../redux/jobslice";
import { useNavigate } from "react-router-dom";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UI/UX Designer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/Browser");
  };

  return (
    <div className="my-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Job Categories
        </h1>
        <p className="text-center text-gray-600">
          Explore opportunities by role
        </p>
      </div>

      {/* Carousel */}
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
            >
              <Button
                onClick={() => searchJobHandler(category)}
                className="w-full cursor-pointer transition hover:scale-105"
                variant="outline"
              >
                {category}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default Categories;
