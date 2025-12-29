import { setAllAdminJobs } from "../redux/jobslice";
import { JOB_API_ENDPOINT } from "../utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetAlladminjob = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getadminjobs`, {
          withCredentials: true,
        });

        if (res.data.status) {
          dispatch(setAllAdminJobs(res.data.Jobs));
        }
      } catch (error) {
        console.log(error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAllAdminJobs();
  }, [dispatch]);
  return { loading, error };
};

export default useGetAlladminjob;
