import { setCompanies } from "../redux/comapnySlice";
import { COMPANY_API_ENDPOINT } from "../utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const usegetAllCompaines = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        console.log("called");
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
        setError(error.message || "An error occurred");
      }
    };

    fetchCompanies();
  }, []);
};

export default usegetAllCompaines;
