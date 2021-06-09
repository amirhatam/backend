const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: Number,
    cuisine: String,
    priceCategory : Number,
    created: { type: Date, default: Date.now }
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)


module.exports = Restaurant
