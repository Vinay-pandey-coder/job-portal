import React, { useEffect } from "react";
import Navbar from "../components_lite/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { APPLICATION_API_ENDPOINT } from "../../utils/data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllApplicants } from "../../redux/applications";


const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_ENDPOINT}/${params.id}/applicants`,
          { withCredentials: true }
        );
        dispatch(setAllApplicants(res.data.job));
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <h1 className="font-bold text-xl my-10">Applicants</h1>
          <ApplicantsTable />
        </div>
      </div>
    </>
  );
};

export default Applicants;
