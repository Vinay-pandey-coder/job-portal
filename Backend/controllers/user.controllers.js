import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloud.js";

// register
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    let profilePhotoUrl = "";

    if (req.file) {
      const fileUri = getDataUri(req.file);
      const cloudResponse = await cloudinary.uploader.upload(
        fileUri.content
      );
      profilePhotoUrl = cloudResponse.secure_url;
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = new User({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: profilePhotoUrl,
      },
    });

    await newuser.save();

    return res.status(201).json({
      message: `Account created successfully ${fullname}`,
      success: true,
    });
  } catch (error) {
    console.log("REGISTER ERROR:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};


// login
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password", success: false });
    }

    // check role correctly or not match
    if (user.role !== role) {
      return res.status(403).json({
        message: "You don't have the necessary role to access the resource",
        success: false,
      });
    }

    // generate token
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({ message: `Welcome back ${user.fullname}`, user, success: true });
  } catch (error) {
    console.log(error);
  }
};

// logout
export const logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", {
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({ message: "Logout successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

// update profile
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    // cloudinary upload
    const fileUri = getDataUri(file);
    const cloudinaryResponse = await cloudinary.uploader.upload(
      fileUri.content,
    );

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id; // middleware authentication
    let user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: "User Not Found", success: false });
    }

    //  update database profile
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;
    if (cloudinaryResponse) {
      user.profile.resume = cloudinaryResponse.secure_url;
      user.profile.resumeOriginalname = file.originalname;
    }

    // resume
    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .json({ message: "Profile Updated successfully", user, success: true });
  } catch (error) {
    console.log(error);
  }
};
