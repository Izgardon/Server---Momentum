const mongoose = require("mongoose");
// const User = require (mongoose.model("user", UserSchema))
// const ObjectId = mongoose.Schema.Types.ObjectId;

const habitSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  habits: {
    water: {
      max: 0,
      current: 0,
      active: false,
    },
    outdoors: {
      max: 0,
      current: 0,
      active: false,
    },
    code: {
      max: 0,
      current: 0,
      active: false,
    },
    projects: {
      max: 0,
      current: 0,
      active: false,
    },
  },

  streaks: {
    water: {
      max: false,
      current: 0,
    },
    outdoors: {
      max: false,
      current: 0,
    },
    code: {
      max: false,
      current: 0,
    },
    projects: {
      max: false,
      current: 0,
    },
  },
});

const Habits = mongoose.model("habit", habitSchema);
module.exports = Habits;
