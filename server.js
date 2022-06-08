const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
app.use(cors("*"));

//Routes
app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to momentum"));

// mount routers

//load env variables
dotenv.config({ path: "./config/config.env" });

// connect to db
connectDB();

// route files
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
const habitsRoutes = require("./routes/habits");
app.use("/habits", habitsRoutes);

// const PORT = process.env.PORT || 5050;

// const server = app.listen(
//   PORT,
//   console.log(
//     `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
//   )
// );



if (process.env.NODE_ENV !== 'test') {app.listen(process.env.PORT || 8080, () => {
  console.log("server running on 8080")
})}

// handle unhandled promise rejection
process.on("unhandled rejections", (err, promise) => {
  console.log(`unhandled rejection: ${err.message}`.red);
  //close server and exit process
  server.close(() => process.exit(1));
});
