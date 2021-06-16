const mongoose = require("mongoose")

const UNSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: String,
    created: { type: Date, default: Date.now }
})

const UserName = mongoose.model("User", UNSchema)



module.exports = UserName