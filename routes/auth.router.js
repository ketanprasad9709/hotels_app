const express = require('express');

const signuphandler = require("../controllers/signupController");
const loginhandler = require("../controllers/logincontroller");

const router = express.Router();

router.route("/register")
    .post(signuphandler);

router.route("/login")
    .post(loginhandler);

module.exports = router;

