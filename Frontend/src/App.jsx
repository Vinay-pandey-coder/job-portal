import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/authentication/Login'
import Home from './components/components_lite/Home'
import Register from './components/authentication/Register'
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy.jsx";
import TermsofService from "./components/components_lite/TermsofService.jsx";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsofService",
    element: <TermsofService />,
  }
])


const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </>
  )
}

export default App