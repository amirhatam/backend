const express = require("express")
const router = express.Router()
const {getUsers} = require("../controllers/getUsers")
const { verifyToken} = require("../middlewares/authMiddleware")



router.get("/admin",verifyToken,  getUsers)

module.exports = router

