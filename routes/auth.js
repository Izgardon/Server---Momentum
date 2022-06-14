const express = require("express");
//const res = require("express/lib/response");
const router = express.Router();

const { login, register, getAllUsers } = require("../controllers/auth");

router.post("/register", (req,res) => {register(req,res)} );
router.post("/login", login);
router.get("/", getAllUsers);

module.exports = router;
