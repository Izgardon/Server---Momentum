const express = require("express");
const router = express.Router();

const {
  getHabit,

  createHabit,
  updateHabit,
  deleteHabit,
  updateStreak,
} = require("../controllers/habits");

router
  .route("/streaks/:id")
  .patch(updateStreak)

  .post(createHabit);

router
  .route("/:id")
  .get(getHabit)
  .patch(updateHabit)
  // .patch(completeHabit)
  .delete(deleteHabit);

module.exports = router;
