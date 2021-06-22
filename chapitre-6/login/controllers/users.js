const userNameModel = require("../models/userName")
const expressValidator = require("express-validator")
const bcrypt = require('bcryptjs');

const addUser = async (req, res) => {
    try {
        console.log("req.body :", req.body)
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {

            res.status(400).json({ errors: errors.array() })
        } else {
            const pass = req.body.password
            const user = req.body.username
            const passHash= bcrypt.hashSync(pass)
            console.log(passHash)
            const newUser = await userNameModel.create({user, passHash})

            res.json({ message: "The user was addes!", newUser })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}



module.exports = {
    addUser,
   
}