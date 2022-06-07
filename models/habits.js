const mongoose = require("mongoose");
// const User = require (mongoose.model("user", UserSchema))
// const ObjectId = mongoose.Schema.Types.ObjectId;






const habitSchema = new mongoose.Schema({
  user:{
    type: mongoose.SchemaTypes.ObjectId, ref: 'user'
    
   } ,
 
  habitName: {
    type: String,
    required: true,
  },
  habitDesc: {
    type: String,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  measure: {
    type: [Number],
  },
  target: {
    type: [Number],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  
});

const Habits = mongoose.model("habit", habitSchema);
module.exports = Habits;

