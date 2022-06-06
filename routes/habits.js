const express = require("express");
const router = express.Router();

const {
  getHabits,
  // completEHabit,
  createHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habits");

router.route("/")
.get(getHabits)
.post(createHabit);

router
  .route("/:id")
  .patch(updateHabit)
  // .patch(completeHabit)
  .delete(deleteHabit);

module.exports = router;
