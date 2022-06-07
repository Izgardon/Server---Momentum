const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// load env var
dotenv.config({ path: "./config/config.env" });

// load models
const Habit = require("./models/habits");
const { default: mongoose } = require("mongoose");

// connect to db

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});

// READ JSON FILE
const habits = JSON.parse(
  fs.readFileSync(`${__dirname}/data/habits.json`, "utf-8")
);

// import into db
const importData = async () => {
  try {
    await Habit.create(habits);
    console.log("data imported...".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// delete data
const deleteData = async () => {
  try {
    await Habit.deleteMany();
    console.log("data destroyed...".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
