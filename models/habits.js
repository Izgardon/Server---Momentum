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
    },
    outdoors: {
      max: 0,
      current: 0,
    },
    coding: {
      max: 0,
      current: 0,
    },
    projects: {
      max: 0,
      current: 0,
    },
  },

  streaks: {
    water: {
      max: 0,
      current: 0,
    },
    outdoors: {
      max: 0,
      current: 0,
    },
    coding: {
      max: 0,
      current: 0,
    },
    projects: {
      max: 0,
      current: 0,
    },
  },
});

const Habits = mongoose.model("habit", habitSchema);
module.exports = Habits;
