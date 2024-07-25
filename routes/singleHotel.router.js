const express = require('express');
const router = express.Router();

const singleHotelHandler = require("../controllers/singlehotelcontroller");

router.route("/:id")
    .get(singleHotelHandler)

module.exports = router;