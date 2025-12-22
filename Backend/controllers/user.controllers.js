import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// register
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    console.log(fullname, email, phoneNumber, password, role)
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // email
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }

    // convert password to hashed
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = new User({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    await newuser.save()

    return res.status(200).json({message:`Account created successfully ${fullname}`,success:true})

  } catch (error) {
    console.log(error);
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
      fullname:user.fullname,
      email:user.email,
      phoneNumber:user.phoneNumber,
      role:user.role,
      profile:user.profile
    }

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Strict",
      })
      .json({ message: `Welcome back ${user.fullname}`, user,success: true });
  } catch (error) {
    console.log(error);
  }
};



// logout
export const logout = (req,res)=>{
  try {
      res.status(200).cookie('token',"",{maxAge:0}).json({ message: "Logout successfuly ", success:true })
  } catch (error) {
    console.log(error)
  }
}



// update profile
export const updateProfile = async(req,res)=>{
  try {
  const { fullname, email, phoneNumber, bio, skills } = req.body
  const file = req.files;



// cloudinary upload


  let skillsArray;
    if (skills) {
      const skillsArray = skills.split(',')
    }
    const userId = req.id // middleware authentication
    let user = await User.findById(userId)
    if(!user){
      return res.status(404).json({message:"User Not Found",success:false})
    }




//  update database profile
      if (fullname) {        
        user.fullname = fullname
      }

      if (email && email !== user.email) {
          const emailExists = await User.findOne({ email });
      if (emailExists) {
          return res.status(400).json({ message: "Email already exists", success: false });
      }
          user.email = email;  // Update email if it's unique
      }
      
      if (phoneNumber) {        
        user.phoneNumber = phoneNumber
      }
      if (bio) {        
        user.profile.bio = bio
      }
      if (skills) {        
        user.profile.skills = skillsArray
      }


// resume
      await user.save()

    user = {
      _id: user._id,
      fullname:user.fullname,
      email:user.email,
      phoneNumber:user.phoneNumber,
      role:user.role,
      profile:user.profile
    }

    return res.status(200).json({message:"Profile Updated successfully",user, success:true})

  } catch (error) {
    console.log(error)
  }
}