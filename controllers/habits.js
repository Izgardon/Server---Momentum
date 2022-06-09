const Habits = require("../models/habits");

// Get all habit
// GET /habits



exports.getHabit = async (req, res, next) => {
  try {
    const userHabits = await Habits.find({ username: req.params.id });
    res.status(200).json(userHabits);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};








// Create new  habit
// POST '/habits'
exports.createHabit = async (req, res, next) => {
  try {
    const habit = await Habits.create(req.body);

    res.status(201).json({
      data: habit,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};




// Update new  habit
// PUT /habits/:id
exports.updateHabit = async (req, res, next) => {
  try {
    if (req.body.habit) {
      let queryParam = {};
      queryParam[`habits.${req.body.habit}.active`] = true;

      await Habits.findOneAndUpdate({ username: req.params.id }, queryParam);

      res.status(202).send("Success adding habit");
    } else if (req.body.type) {
      let queryParam = {};
      queryParam[`habits.${req.body.type}.current`] = 1;
      let incrementedHabit = await Habits.findOneAndUpdate(
        { username: req.params.id },
        { $inc: queryParam },
        { new: true }
      );
      res.status(202).json(incrementedHabit);
    } else if (req.body.streaks) {
      let queryParam = {};
      queryParam[`streaks.${req.body.streaks}.current`] = 1;
      let incremenStreaks = await Habits.findOneAndUpdate(
        { username: req.params.id },
        { $inc: queryParam },
        { new: true }
    )}
      res.status(202).json("success adding streak");
  } catch (error) {
    res.status(400).json({ success: false });
  } 
};






// DELETE   habit
// DELETE /habits/:id
exports.deleteHabit = async (req, res, next) => {
  try {
    const habit = await Habits.findByIdAndDelete(req.params.id);
    if (!habit) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ sucess: true, data: habit });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
