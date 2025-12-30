import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../utils/data";
import { toast } from "sonner";
import { setUser } from "../../redux/authSlice";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const EditProfileModel = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.join(", "),
    file: null,
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const FileChangehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) formData.append("file", input.file);

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="
          w-[95%] sm:max-w-lg
          max-h-[90vh] overflow-y-auto
        "
      >
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Update your profile details and resume
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2">
            <Label className="sm:text-right">Name</Label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="sm:col-span-3 border rounded-md p-2"
            />
          </div>

          {/* Email */}
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2">
            <Label className="sm:text-right">Email</Label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="sm:col-span-3 border rounded-md p-2"
            />
          </div>

          {/* Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2">
            <Label className="sm:text-right">Phone</Label>
            <input
              type="tel"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              className="sm:col-span-3 border rounded-md p-2"
            />
          </div>

          {/* Bio */}
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2">
            <Label className="sm:text-right">Bio</Label>
            <input
              type="text"
              name="bio"
              value={input.bio}
              onChange={changeEventHandler}
              className="sm:col-span-3 border rounded-md p-2"
            />
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2">
            <Label className="sm:text-right">Skills</Label>
            <input
              type="text"
              name="skills"
              value={input.skills}
              onChange={changeEventHandler}
              placeholder="React, Node, MongoDB"
              className="sm:col-span-3 border rounded-md p-2"
            />
          </div>

          {/* Resume */}
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2">
            <Label className="sm:text-right">Resume</Label>
            <input
              type="file"
              accept="application/pdf"
              onChange={FileChangehandler}
              className="sm:col-span-3 border rounded-md p-2"
            />
          </div>

          {/* Footer */}
          <DialogFooter>
            <Button type="submit" className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Save"
              )}
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModel;
