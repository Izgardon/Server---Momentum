const mongoose = require("mongoose");
const habitSchema = new mongoose.Schema({
  // username: {
  //     type: String,
  //     required: true
  // },
  habitName: {
    type: String,
    required: true,
  },
  habitDesc: {
    type: String,
  },
  // startTime: {
  //   type: Date,
  //   default: Date.now,
  // },
  // endTime: {
  //   type: Date,
  //   default: Date.now,
  // },
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  // measure: {
  //   type: [Number],
  // },
  // target: {
  //   type: [Number],
  // },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("habit", habitSchema);
