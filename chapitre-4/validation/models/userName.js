const mongoose = require("mongoose")

const UNSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: String,
    created: { type: Date, default: Date.now }
})

const userNameModel = mongoose.model("User", UNSchema)



module.exports = userNameModel