const express = require("express");
const router = express.Router();

const {
  getHabit,
  getDate,
  postDate,
  createHabit,
  updateHabit,
  deleteHabit,
  updateStreak,
} = require("../controllers/habits");

router.route("/streaks/:id").patch(updateStreak);

router.route("/date/:id").patch(postDate);

router
  .route("/:id")
  .get(getHabit)
  .patch(updateHabit)
  // .patch(completeHabit)
  .delete(deleteHabit);

module.exports = router;
