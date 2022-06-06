const express = require("express");
const router = express.Router();

const {
  login,
  // completEHabit,
  register,
} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
