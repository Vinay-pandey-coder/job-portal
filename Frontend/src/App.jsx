import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/authentication/Login'
import Home from './components/components_lite/Home'
import Register from './components/authentication/Register'

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