const express = require('express');

const wishlistcontroller = require("../controllers/wishlistcontroller");
const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = wishlistcontroller;

const verifyuser = require("../middleware/verifyUser");

const router = express.Router();

router.route("/")
    .post(verifyuser, createWishlistHandler)

router.route("/:id")
    .delete(verifyuser, deleteWishlistHandler)

router.route("/")
    .get(verifyuser, getWishlistHandler)

module.exports = router;