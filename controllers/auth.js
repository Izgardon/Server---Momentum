const bcrypt = require("bcryptjs");
const User = require("../models/auth");

async function register(req, res) {
  try {
    /*  const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      name: req.body.title,
      password: hashed,
      date: req.body.message,
    }); */
    //Add user to db

    res.status(201).json({ msg: "User created" });
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function login(req, res) {
  try {
    //Find user from database
    if (!user) {
      throw new Error("No user with this name");
    }
    const authed = bcrypt.compare(req.body.password, user.password);
    if (!!authed) {
      res.status(200).json({ user: user.username });
    } else {
      throw new Error("User could not be authenticated");
    }
  } catch (err) {
    res.status(401).json({ err });
  }
}

module.exports = { register, login };
