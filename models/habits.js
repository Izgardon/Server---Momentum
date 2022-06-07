const mongoose = require("mongoose");
// const User = require (mongoose.model("user", UserSchema))
// const ObjectId = mongoose.Schema.Types.ObjectId;


const habitSchema = new mongoose.Schema({
  // user:{
  //   type: mongoose.SchemaTypes.ObjectId, ref: 'user'
    
  //  } ,

  tracked_habits: {},
          streaks: {
           Cups_of_water: {
              highest: 0,
              current: 0,
            },
            Time_spent_outdoors: {
              highest: 0,
              current: 0,
            },
            Time_spent_coding: {
              highest: 0,
              current: 0,
            },
            Weekly_project: {
              highest: 0,
              current: 0,
            },
          }
  
});

const Habits = mongoose.model("habit", habitSchema);
module.exports = Habits;

