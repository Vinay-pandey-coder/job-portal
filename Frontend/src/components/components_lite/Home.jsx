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
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Header />

      {/* Categories */}
      <Categories />

      {/* Latest Jobs Section */}
      <div className="flex-1">
        {loading && (
          <p className="text-center text-gray-500 my-10">
            Loading jobs...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 my-10">
            Error: {error}
          </p>
        )}

        {!loading && !error && <LatestJobs />}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
