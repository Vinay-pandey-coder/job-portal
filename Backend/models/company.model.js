import mongoose from "mongoose";

const companySchema = new mongoose({
  name: {
    type: String,
    required: true,
  },
  address:{
    type: String,
    required:true,
  },
  website:{
    type: String,
  },
  location:{
      type: String,
  },
  logo:{
    type: String, // URL for logo
  },
  userId:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:true
  }]
},{timestamps:true});

export const Company = mongoose.model("Company",companySchema)