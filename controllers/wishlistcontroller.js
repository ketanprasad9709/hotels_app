const wishlist = require("../model/wishlist.model");

const createWishlistHandler = async (req, res) => {
    try{
        const newWishlist = new wishlist(req.body);
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }catch(err){
        res.status(500).json({message: "failed to create wishlist"});
    }

};

const deleteWishlistHandler = async (req, res) => {
    try{
        const userID = req.headers['userid'];
        await wishlist.findOneAndDelete({hotelID: req.params.id, userID: userID});
        res.json({message: "hotel deleted from wishlist"});
    }catch(err){
        res.status(500).json({message: "unable to delete"});
    }
};

const getWishlistHandler = async (req, res) => {
    try{
        const userID = req.headers['userid'];
        const allwishlist = await wishlist.find({userID});
        res.json(allwishlist);
    }catch(err){
        res.status(500).json({message: "wishlist not found"});
    }
};

module.exports = { createWishlistHandler, deleteWishlistHandler, getWishlistHandler };