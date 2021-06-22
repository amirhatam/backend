const userNameModel = require("../models/userName")
const expressValidator = require("express-validator")
const bcrypt = require('bcryptjs');

const addUser = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {

            res.status(400).json({ errors: errors.array() })
        } else {
            const username = req.body.username
            const pass = req.body.password

            const password = bcrypt.hashSync(pass)

            console.log("UserName :", username)
            console.log("Password :", password)

            const newUser = await userNameModel.create({ username, password })
            console.log(newUser)

            res.json({ message: "The user was addes!", newUser })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}


const logInUser = async (req, res) => {
    try {

        // if () {

        //     res.status(400).json({ errors: errors.array() })
        // } else {
           
        //     res.json({ message: "The user was addes!", newUser })
        // }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}


module.exports = {
    addUser,
    logInUser
}