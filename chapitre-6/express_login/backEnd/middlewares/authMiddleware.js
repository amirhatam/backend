const userModel = require("../models/user")
const jwt = require("jsonwebtoken")

const verifyToken = async (req,res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const result = jwt.verify(token, config.secret)

        if (result.id) {

            const user = await userModel.findById({ _id: result.id }).lean()

            req.user = user
            next()
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(401).json({ message: "You can't have access" })
    }

}

module.exports = {verifyToken}