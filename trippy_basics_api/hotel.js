const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: Number,
    hasSpa: Boolean,
    isAlive: Boolean,
    priceCategory : Number,
    created: { type: Date, default: Date.now }
})

const Hotel = mongoose.model("Hotel", hotelSchema)



module.exports = Hotel