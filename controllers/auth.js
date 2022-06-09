const bcrypt = require("bcryptjs");
const User = require("../models/auth");
const Habits = require("../models/habits");

async function deleteAll() {
  await Habits.deleteMany();
  await User.deleteMany();
}

//Uncomment and save to delete all databases

/* deleteAll(); */

async function register(req, res) {
  try {
    let userCheck = await User.findOne(
      {
        username: req.body.username,
      },
      { username: 1 }
    );

    if (!userCheck) {
      const salt = await bcrypt.genSalt();
      const hashed = await bcrypt.hash(req.body.password, salt);
      habitCreator(req.body);
      let user = userCreator(req.body, hashed);

      res.status(201).json(user);
    } else {
      throw new Error("This user already exists");
    }
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function login(req, res) {
  try {
    //Find user from database
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
      throw new Error("No user with this name");
    }
    const authed = await bcrypt.compare(req.body.password, user.password);

    if (!!authed) {
      res.status(200).json(user.username);
    } else {
      throw new Error("User could not be authenticated");
    }
  } catch (err) {
    res.status(401).json({ err });
  }
}

async function userCreator(data, hash) {
  return await User.create({
    username: data.username,
    password: hash,
  });
}

async function habitCreator(data) {
  return await Habits.create({
    username: data.username,

    habits: {
      water: {
        max: 8,
        current: 0,
        active: false,
      },
      outdoors: {
        max: 3,
        current: 0,
        active: false,
      },
      code: {
        max: data.skill * 2,
        current: 0,
        active: false,
      },
      projects: {
        max: data.skill * 1,
        current: 0,
        active: false,
      },
    },

    streaks: {
      water: {
        max: false,
        current: 0,
      },
      outdoors: {
        max: false,
        current: 0,
      },
      code: {
        max: false,
        current: 0,
      },
      projects: {
        max: false,
        current: 0,
      },
    },
  });
}

async function getAllUsers(req, res) {
  const allUsers = await User.find();
  res.json(allUsers);
}

module.exports = { register, login, getAllUsers };
