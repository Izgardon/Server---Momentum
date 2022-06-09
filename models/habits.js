const mongoose = require("mongoose");
// const User = require (mongoose.model("user", UserSchema))
// const ObjectId = mongoose.Schema.Types.ObjectId;



var incrementStreak = function(){
  var timeObject = new Date();
  timeObject.setTime(timeObject.getTime() + 1*24*60*60*1000);
  return timeObject;
};


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
    water: [{
      max: 0,
      current: 0,
      type: Date, 
      default: incrementStreak
    }],
    outdoors: [{
      max: 0,
      current: 0,
    }],
    coding: [{
      max: 0,
      current: 0,
    }],
    projects: [{
      max: 0,
      current: 0,
    }],
  },
});

const Habits = mongoose.model("habit", habitSchema);
module.exports = Habits;
