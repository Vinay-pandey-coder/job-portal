import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div className="right">
            <h1 className="text-2xl font-bold">
              Job <span className="text-[#F83002]">Portal</span>
            </h1>
          </div>

          <div className="left flex items-center gap-5">
            <ul className="flex font-medium items-center gap-6 cursor-pointer">
              <li>Home</li>
              <li>Browse</li>
              <li>Job</li>
            </ul>

            {!user ? (
              <div className="flex items-center gap-2">
                <Link to={'/register'}>
                  <Button
                    className={"bg-red-400 hover:bg-red-700 cursor-pointer"}
                  >
                    Register
                  </Button>
                </Link>
                <Link to={'/login'}>
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
                      src="https://github.com/evilrabbit.png"
                      alt="@avilrabbit"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className={"w-80"}>
                  <div className="flex items-center gap-4 space-y-2">
                    <Avatar className={"cursor-pointer"}>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@avilrabbit"
                      />
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Vinay Pandey</h3>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolorum, excepturi.
                      </p>
                    </div>
                  </div>
                  <div className="flex my-2 flex-col text-gray-600">
                    <div className="flex w-fit items-center gap-2">
                      <User2 />
                      <Button variant="link">Profile</Button>
                    </div>
                    <div className="flex w-fit items-center gap-2">
                      <LogOut />
                      <Button variant="link">Logout</Button>
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
