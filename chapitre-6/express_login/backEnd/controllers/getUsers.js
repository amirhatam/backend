const userModel = require("../models/user")


const getUsers = async (req, res) => {

    try {
        const users = await userModel.find().lean()

        res.json(users)

    } catch (err) {
        res.status(500).json({ message: "There was a problem", err })
    }
}


module.exports = {
   
    getUsers,
}