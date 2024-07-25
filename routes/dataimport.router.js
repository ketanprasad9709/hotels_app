const express = require('express');
const mongoose = require('mongoose');

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotel");

const router = express.Router();

router.route("/") 
    .post(async (req, res) => {
        try{
            await Hotel.deleteMany({});
            const hotelsInDb = await Hotel.insertMany(hotels.data);
            res.json(hotelsInDb);
        }catch(err){
            console.log(err);
            res.json({message: "could not add data to db"});
        }
    })

module.exports = router;

