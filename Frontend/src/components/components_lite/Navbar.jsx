import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
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
  const logoutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/logout`);
      if (response.data.message) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logged out successfuly");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div className="right">
            <h1 className="text-2xl font-bold text-[#6B3AC2]">
              Job <span className="text-[#E35B14]">Portal</span>
            </h1>
          </div>

          <div className="left flex items-center gap-5">
            <ul className="flex font-medium items-center gap-6 cursor-pointer">
              {user && user.role === "Recruiter" ? (
                <>
                  <li>
                    <Link to={"/admin/companies"}>Companies</Link>
                  </li>
                  <li>
                    <Link to={"/admin/jobs"}>Jobs</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/Browser"}>Browse</Link>
                  </li>
                  <li>
                    <Link to={"/Jobs"}>Job</Link>
                  </li>
                </>
              )}
            </ul>

            {!user ? (
              <div className="flex items-center gap-2">
                <Link to={"/register"}>
                  <Button
                    className={"bg-red-400 hover:bg-red-700 cursor-pointer"}
                  >
                    Register
                  </Button>
                </Link>
                <Link to={"/login"}>
                  <Button variant="outline" className={"cursor-pointer"}>
                    Login
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className={"cursor-pointer"}>
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@avilrabbit"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className={"w-80"}>
                  <div className="flex items-center gap-4 space-y-2">
                    <Avatar className={"cursor-pointer"}>
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@avilrabbit"
                      />
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{user?.fullname}</h3>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex my-2 flex-col text-gray-600">
                    {user && user.role === "Student" && (
                      <div className="flex w-fit items-center gap-2">
                        <User2 />
                        <Button variant="link">
                          <Link to={"/profile"}>Profile</Link>
                        </Button>
                      </div>
                    )}

                    <div className="flex w-fit items-center gap-2">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
