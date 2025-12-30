import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../../redux/authSlice";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password || !input.role) {
      toast.error("Please fill all fields and select a role.");
      return;
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center py-10 px-4">
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
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Role */}
          <RadioGroup className="flex items-center gap-6 my-5">
            {["Student", "Recruiter"].map((role) => (
              <div key={role} className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="role"
                  value={role}
                  checked={input.role === role}
                  onChange={changeEventHandler}
                  required
                />
                <Label>{role}</Label>
              </div>
            ))}
          </RadioGroup>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full py-3 my-3 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Login"}
          </Button>

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
