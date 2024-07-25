const Hotel = require("../model/hotel.model");

const singleHotelHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const hotelByID = await Hotel.findById(id);
        hotelByID? res.json(hotelByID): res.status(404).res.json({message: "Hotel of input ID not found"}); 
    } catch(err) {
        console.log(err);
    }
    
};

module.exports = singleHotelHandler;