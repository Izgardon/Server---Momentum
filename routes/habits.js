const express = require("express");
const {
  getHabits,
  // completEHabit,
  createHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habits");

const router = express.Router();
router.route("/").get(getHabits).post(createHabit);
router
  .route("/:id")
  .put(updateHabit)
  // .patch(completeHabit)
  .delete(deleteHabit);
module.exports = router;
