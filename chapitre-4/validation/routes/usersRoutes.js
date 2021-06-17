const express = require("express")
const router = express.Router()
const {getUsers, getUser, addUser} = require("../controllers/usersControllers")

router.get("/", getUsers)
router.post("/users/add", addUser)
router.get("/users/:name", getUser)

module.exports = router

