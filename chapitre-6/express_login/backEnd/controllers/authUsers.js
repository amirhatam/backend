const userModel = require("../models/user")
const expressValidator = require("express-validator")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const config = require("../config.js")


const signup = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {

            res.status(400).json({ errors: errors.array() })
        } else {

            const email = req.body.email
            const pass = req.body.password
            const confirmPass = req.body.confirmPassword
            const firstName = req.body.firstName
            const surname = req.body.surname
            const dateOfBirth = req.body.dateOfBirth

            const password = bcrypt.hashSync(pass)
            const confirmPassword = bcrypt.hashSync(confirmPass)

            // console.log("email :", email)
            // console.log("Password :", password)
            // console.log("confirmPassword :", hashconfirmPassword)
            // console.log("firstName :", firstName)
            // console.log("surname :", surname)
            // console.log("dateOfBirth :", dateOfBirth)

            const newUser = await userModel.create(
                {
                    email,
                    password,
                    confirmPassword,
                    firstName,
                    surname,
                    dateOfBirth
                })
            // console.log(newUser)

            res.json({ message: "The user was addes!", newUser })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}


const login = async (req, res) => {
    try {
        const firstName = req.body.firstName
        const user = await userModel.findOne({ firstName })
        
        // console.log("user.password :", user.password)
        // console.log("req.body.password :", req.body.password)

        const result = bcrypt.compareSync(req.body.password, user.password)

        // console.log("result :",result)

        if (result) {
            const token = jwt.sign(
                {
                    id: user._id
                }, config.secret,
                {
                    expiresIn: 60 * 60
                }
            )
            res.json({ message: "You are login", token })
        } else {
            res.status(400).json({ errors: errors.array() })
        }
    } catch (error) {
        console.log("Erorr: ", error)
        res.status(500).json({ message: "There was a problem", error })
    }

}


module.exports = {
    signup,
    login,
}