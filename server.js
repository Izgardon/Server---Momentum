const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

//Routes
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("Welcome to momentum"));

// mount routers

//load env variables
dotenv.config({ path: "./config/config.env" });

// connect to db
connectDB();

//body parser

// route files
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
const habitsRoutes = require("./routes/habits");
app.use("/habits", habitsRoutes);

const PORT = process.env.PORT || 5050;

const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// handle unhandled promise rejection
process.on("unhandled rejections", (err, promise) => {
  console.log(`unhandled rejection: ${err.message}`.red);
  //close server and exit process
  server.close(() => process.exit(1));
});
