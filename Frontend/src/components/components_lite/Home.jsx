import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "../../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error } = useGetAllJobs();
  const jobs = useSelector((state) => state.jobs.alljobs);
  const {user} = useSelector((store)=>store.auth)
  const navigate = useNavigate()
  useEffect(()=>{
      if(user?.role === "Recruiter"){
        navigate('/admin/companies')
      }
  },[])
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      {loading && <p>Loading jobs...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <LatestJobs jobs={jobs} />}
      <Footer />
    </>
  );
};

export default Home;
