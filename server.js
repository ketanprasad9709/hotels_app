const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

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

app.use(express.json());
dbconnect();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';



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
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server is running")
    })
})


