import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv'
import connectDB from "./utils/db.js";
import router from "./routes/user.route.js";
dotenv.config({})
const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cors

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/',(req,res)=>{
  res.send("hello")
})

// api's

app.use("/api/users",router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`);
});
