const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    confirmPassword: String,
    firstName: String,
    surname: String,
    dateOfBirth: Number,
    created: { type: Date, default: Date.now }
})

const userModel = mongoose.model("User", userSchema)



module.exports = userModel