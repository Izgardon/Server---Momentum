const express = require("express");
const router = express.Router();

const {

  getHabit,
  // completEHabit,
  createHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habits");

router.route("/")

.post(createHabit);

router
  .route("/:id")
  .get(getHabit)
  .patch(updateHabit)
  // .patch(completeHabit)
  .delete(deleteHabit);

module.exports = router;
