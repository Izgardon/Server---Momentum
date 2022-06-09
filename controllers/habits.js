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
// PATCH /habits/:id
exports.updateHabit = async (req, res, next) => {
  try {
    //Adding a habit to track
    if (req.body.habit) {
      let queryParam = {};
      queryParam[`habits.${req.body.habit}.active`] = true;

      await Habits.findOneAndUpdate({ username: req.params.id }, queryParam);

      res.status(202).send("Success adding habit");
    }

    //Updating progress
    else if (req.body.type) {
      let queryParam = {};
      queryParam[`habits.${req.body.type}.current`] = 1;
      let incrementedHabit = await Habits.findOneAndUpdate(
        { username: req.params.id },
        { $inc: queryParam },
        { new: true }
      );
      res.status(202).json(incrementedHabit);
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.updateStreak = async (req, res, next) => {
  try {
    let queryParam = {};
    let queryParam1 = {};
    queryParam[`streaks.${req.body.streaks}.current`] = 1;
    queryParam1[`streaks.${req.body.streaks}.max`] = true;
    let incrementStreaks = await Habits.findOneAndUpdate(
      { username: req.params.id },
      { $inc: queryParam, $set: queryParam1 },
      { new: true }
    );
    res.status(202).send(incrementStreaks);
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

exports.postDate = async (req, res, next) => {
  try {
    let newDate = await Habits.findOneAndUpdate(
      { username: req.params.id },
      { date: req.body.date },
      { new: true }
    );
    let queryParamCode = {};
    let queryParamCode1 = {};
    queryParamCode[`habits.code.current`] = 0;
    queryParamCode1[`streaks.code.max`] = false;
    await Habits.findOneAndUpdate(
      { username: req.params.id },
      { $set: queryParamCode },
      { new: true }
    );
    await Habits.findOneAndUpdate(
      { username: req.params.id },
      { $set: queryParamCode1 },
      { new: true }
    );
    let queryParamWater = {};
    let queryParamWater1 = {};
    queryParamWater[`habits.water.current`] = 0;
    queryParamWater1[`streaks.water.max`] = false;
    await Habits.findOneAndUpdate(
      { username: req.params.id },
      { $set: queryParamWater },
      { new: true }
    );
    await Habits.findOneAndUpdate(
      { username: req.params.id },
      { $set: queryParamWater1 },
      { new: true }
    );
    let queryParamOutdoors = {};
    let queryParamOutdoors1 = {};
    queryParamOutdoors[`habits.outdoors.current`] = 0;
    queryParamOutdoors1[`streaks.outdoors.max`] = false;
    await Habits.findOneAndUpdate(
      { username: req.params.id },
      { $set: queryParamOutdoors },
      { new: true }
    );
    await Habits.findOneAndUpdate(
      { username: req.params.id },
      { $set: queryParamOutdoors1 },
      { new: true }
    );

    res.status(202).send("Success");
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
