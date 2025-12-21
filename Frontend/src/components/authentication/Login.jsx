import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input)
  };
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center py-10">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md border border-gray-300 rounded-lg p-6 bg-white shadow-sm"
        >
          <h1 className="font-bold text-2xl mb-6 text-center text-blue-600">
            Login
          </h1>

          {/* Email */}
          <div className="mb-4">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" />
          </div>

          {/* Role */}
          <RadioGroup className="flex items-center gap-6 my-5">
            <div className="flex items-center gap-2">
              <Input
                type="radio"
                name="role"
                value="Student"
                checked={input.role === "Student"}
                onChange={changeEventHandler}
              />
              <Label>Student</Label>
            </div>

            <div className="flex items-center gap-2">
              <Input
                type="radio"
                name="role"
                value="Recruiter"
                checked={input.role === "Recruiter"}
                onChange={changeEventHandler}
              />
              <Label>Recruiter</Label>
            </div>
          </RadioGroup>

          {/* Button */}
          <button type="submit" className="w-full py-3 mt-3 text-white bg-primary hover:bg-primary/90 rounded-md font-medium cursor-pointer">
            Login
          </button>

          {/* Register link */}
          <p className="text-gray-500 text-sm mt-4 text-center">
            No account?{" "}
            <Link className="text-blue-600 hover:underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
