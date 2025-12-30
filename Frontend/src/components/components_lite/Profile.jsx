import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";
import EditProfileModel from "./EditProfileModel";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "../../hooks/useGetAllAppliedJob";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl my-5
        p-5 sm:p-8 shadow shadow-gray-300 hover:shadow-yellow-400">

        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-5">

          {/* Avatar + Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user?.profile?.profilePhoto} />
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="font-medium text-lg sm:text-xl">
                {user?.fullname}
              </h1>
              <p className="text-gray-600 text-sm">
                {user?.profile?.bio}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="self-center sm:self-start"
          >
            <Pen />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-5 space-y-2 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <Mail />
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${user?.email}`}
              target="_blank"
              className="text-blue-600 break-all"
            >
              {user?.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Contact />
            <a href={`tel:${user?.phoneNumber}`}>
              {user?.phoneNumber}
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="my-5">
          <h1 className="font-semibold mb-2">Skills</h1>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills?.length ? (
              user.profile.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-4">
          <label className="font-bold">Resume</label>
          <div className="mt-1 text-sm">
            {isResume ? (
              <a
                target="_blank"
                href={user?.profile?.resume}
                className="text-blue-600 hover:underline"
              >
                Download {user?.profile?.resumeOriginalName}
              </a>
            ) : (
              <span>No Resume Found</span>
            )}
          </div>
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl px-4 sm:px-0">
        <h1 className="text-lg my-5 font-bold">Applied Jobs</h1>
        <AppliedJob />
        <EditProfileModel open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Profile;
