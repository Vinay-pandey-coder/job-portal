import React from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Redux",
  "Tailwind CSS",
  "Docker",
  "Kubernetes",
];

const Profile = () => {
  const isHaveResume = true;
  return (
    <>
      <div>
        <Navbar />

        <div
          className="max-w-7xl mx-auto border border-gray-200 rounded-2xl my-5
        p-8 shadow shadow-gray-400 hover:shadow-yellow-400"
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <Avatar className={"cursor-pointer h-24 w-24"}>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/199726118?v=4"
                  alt="@avilrabbit"
                />
              </Avatar>
              <div>
                <h1 className="font-medium text-xl">Full Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <Button className={"text-right cursor-pointer"} variant="outline">
              <Pen />
            </Button>
          </div>

          <div className=" my-5">
            <div className="flex items-center gap-3 my-2">
              <Mail />
              <span className="">abhi837688@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 my-2">
              <Contact />
              <span className="">+91 8076936158</span>
            </div>
          </div>

          <div>
            <div className="my-5">
              <h1>Skills</h1>
              <div className="flex items-center gap-1">
                {skills.length !== 0 ? (
                  skills.map((item, index) => <Badge key={index}>{item}</Badge>)
                ) : (
                  <span>NA</span>
                )}
              </div>
            </div>
          </div>

          {/* resume */}
          <div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-md font-bold"> Resume</label>
              <div>
                {isHaveResume ? (
                  <Button variant="outline">
                    <a
                      className="cursor-pointer text-blue-600 hover:underline"
                      target="_blank"
                      href="http://resume.com"
                      download="resume.pdf"
                    >
                      Download
                    </a>
                  </Button>
                ) : (
                  <span>No Reusme Found</span>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h1 className="text-md font-bold">Applied Jobs</h1>

            {/* Application Table */}
                <AppliedJob/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
