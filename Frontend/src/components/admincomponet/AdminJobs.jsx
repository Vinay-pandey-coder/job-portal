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
  useGetAlladminjob()
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-6xl mx-auto my-10">
          <div className="flex items-center justify-between my-5">
            <Input
              className="w-fit"
              placeholder="Filter by Name & Jobs"
              onChange={(e) => setInput(e.target.value)}
            ></Input>
            <Button
              onClick={() => navigate("/admin/jobs/create")}
              className="cursor-pointer"
            >
              Post New Job
            </Button>
          </div>
          <div>
            <AdminJobTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminJobs;
