const express = require('express');

const signuphandler = require("../controllers/signupController");
const loginhandler = require("../controllers/logincontroller");
const signupTesthandler = require("../controllers/signupTestcontroller");

const router = express.Router();

router.route("/register")
    .post(signuphandler);

router.route("/login")
    .post(loginhandler);

router.route("/signuptest")
    .post(signupTesthandler);

module.exports = router;

