import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from '../../hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs()
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <LatestJobs />
      <Footer/>
    </>
  );
};

export default Home;
