const userModel = require("../models/user")
const expressValidator = require("express-validator")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
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

            const newUser = await userModel.create({ username, password })
            console.log(newUser)

            res.json({ message: "The user was addes!", newUser })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}


const login = async (req, res) => {
    try {
        console.log("req.body.email")
        const userEmail = req.body.email
        const user = await userModel.findOne({ userEmail })

        const result = bcrypt.compareSync(req.body.password, user.password)

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
        console.log("Eroor: ", error)
        res.status(500).json({ message: "There was a problem", error })
    }

}


module.exports = {
    signup,
    login,

}