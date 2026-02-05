import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/comapny.route.js";
import jobRoute from './routes/job.route.js'
import applicationRoute from './routes/applications.route.js'
dotenv.config({});
const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cors

const corsOptions = {
    origin: [
      "https://job-port1.netlify.app"
    ],
  credentials: true,
};

app.use(cors(corsOptions));


app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hello");
});

// api's

app.use("/api/users", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
