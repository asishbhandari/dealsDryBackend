const express = require("express");
const { handleUserLogin } = require("../Controllers/user/handleUserLogin");
const { handleUserSignUp } = require("../Controllers/user/handleUserSignUp");

const router = express.Router();

router.post("/login", handleUserLogin);

// this route is uncommented only when adding admin users
// router.post("/signup", handleUserSignUp);

module.exports = router;
