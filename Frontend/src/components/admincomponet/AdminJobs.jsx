import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchJobByText } from "../../redux/jobslice";
import AdminJobTable from "./AdminJobTable";
import useGetAlladminjob from "../../hooks/useGetAlladminjob";

const AdminJobs = () => {
  useGetAlladminjob();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // Update search query in Redux store when input changes
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto my-10">
        <div className="flex flex-col md:flex-row items-center justify-between my-5 gap-4">
          <Input
            className="w-full md:w-1/2"
            placeholder="Filter by Name & Jobs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => navigate("/admin/jobs/create")}
            className="cursor-pointer"
          >
            Post New Job
          </Button>
        </div>

        <AdminJobTable />
      </div>
    </>
  );
};

export default AdminJobs;