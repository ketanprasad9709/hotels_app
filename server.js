const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

dotenv.config();

const hotelrouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singleHotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const importRouter = require("./routes/dataimport.router");
const categoryImportRouter = require("./routes/categoryImport.router");


const dbconnect = require("./config/db_config");


const app = express();

app.use(cors());
app.use((req, res, next) => {
  // Allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');// Allow specific headers
  next();
});

app.use(express.json());
dbconnect();

//const PORT = 3000;
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.send("I am K")
})

app.use("/api/hotels", hotelrouter);
app.use("/api/hoteldata", importRouter);
app.use("/api/categorydata", categoryImportRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
    console.log("connected to db");
    app.listen(port, () => {
        console.log("Server is running")
    });
});



