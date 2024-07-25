const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    hotelID: {type: String, required: true}
});

const Wishlist = mongoose.model("wishlist", wishlistSchema);

module.exports = Wishlist;