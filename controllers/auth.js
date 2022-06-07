const bcrypt = require("bcryptjs");
const User = require("../models/auth");

async function register(req, res) {
  try {
    /*  const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.password, salt);
    const user = await User.create ({
      username: req.body.username,
      password: hashed,
      date: req.body.message,

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function login(req, res) {
  try {
    //Find user from database
    let user = await User.findOne({ username: req.body.username })
    if (!user) {
      throw new Error("No user with this name");
    }
    const authed = bcrypt.compare(req.body.password, user.password);
    if (!!authed) {
      res.status(200).json( user.username );
    } else {
      throw new Error("User could not be authenticated");
    }
  } catch (err) {
    res.status(401).json({ err });
  }
}

async function getAllUsers(req, res) {
  const allUsers = await User.find()
  res.json(allUsers)
}

module.exports = { register, login, getAllUsers };
