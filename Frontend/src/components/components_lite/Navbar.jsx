import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, Menu, User2, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../utils/data";
import { setUser } from "../../redux/authSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/logout`);
      if (response.data.message) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logged out successfully");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="bg-white border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#6B3AC2]">
          Job <span className="text-[#E35B14]">Portal</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 font-medium">
            {user?.role === "Recruiter" ? (
              <>
                <Link to="/admin/companies">Companies</Link>
                <Link to="/admin/jobs">Jobs</Link>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/Browser">Browse</Link>
                <Link to="/Jobs">Jobs</Link>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex gap-2">
              <Link to="/register">
                <Button className="bg-red-400 hover:bg-red-700">Register</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user?.fullname}</h3>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  {user?.role === "Student" && (
                    <Link to="/profile" className="flex gap-2 items-center">
                      <User2 /> Profile
                    </Link>
                  )}
                  <button
                    onClick={logoutHandler}
                    className="flex gap-2 items-center text-red-500"
                  >
                    <LogOut /> Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          {user?.role === "Recruiter" ? (
            <>
              <Link to="/admin/companies">Companies</Link>
              <Link to="/admin/jobs">Jobs</Link>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/Browser">Browse</Link>
              <Link to="/Jobs">Jobs</Link>
              {user?.role === "Student" && (
                <Link to="/profile">Profile</Link>
              )}
            </>
          )}

          {!user ? (
            <div className="flex gap-2">
              <Link to="/register">
                <Button>Register</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          ) : (
            <Button onClick={logoutHandler} variant="destructive">
              Logout
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
