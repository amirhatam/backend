const userNameModel = require("../models/userName")
const expressValidator = require("express-validator")

const getUsers = async (req, res) => {

    try {
        const users = await userNameModel.find().lean()

        res.json(users)

    } catch (err) {
        res.status(500).json({ message: "There was a problem", err })
    }
}

const getUser = async (req, res) => {
    try {

        const username = req.params.name

        const user = await userNameModel.findOne({ username: username })

        res.json(user)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const getUserById = async (req, res) => {
    try {
        
        console.log("req.params : ", req.params)
        const userid = req.params.id

        const user = await userNameModel.findOne({ _id: userid })

        res.json(user)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}
const getUserByEmail = async (req, res) => {
    try {
        
        console.log("req.params : ", req.params)
        const userEmail = req.params.email

        const user = await userNameModel.findOne({ email: userEmail })

        res.json(user)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addUser = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newUser = await userNameModel.create(req.body)
            res.json({ message: "The user was addes!", newUser })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}

module.exports = {
    getUser,
    getUsers,
    addUser,
    getUserById,
    getUserByEmail
}