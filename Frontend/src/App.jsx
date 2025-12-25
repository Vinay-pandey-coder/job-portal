import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login.jsx";
import Home from "./components/components_lite/Home.jsx";
import Register from "./components/authentication/Register.jsx";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy.jsx";
import TermsofService from "./components/components_lite/TermsofService.jsx";
import Jobs from "./components/components_lite/Jobs.jsx";
import Browse from "./components/components_lite/Browse.jsx";
import Profile from "./components/components_lite/Profile.jsx";
import Description from "./components/components_lite/Description.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
      path:"/description/:id",
      element:<Description/>
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsofService",
    element: <TermsofService />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/Browser",
    element: <Browse />,
  },
]);

const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </>
  );
};

export default App;
