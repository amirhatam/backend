const express = require("express")
const router = express.Router()
const {getUsers, getUser, addUser, getUserById, getUserByEmail} = require("../controllers/users")
const { validationUsers } = require("../middlewares/validationsMiddlewares")


router.get("/", getUsers)
router.post("/add", validationUsers, addUser)
router.get("/name/:name", getUser)
router.get("/id/:id", getUserById)
router.get("/email/:email", getUserByEmail)

module.exports = router

