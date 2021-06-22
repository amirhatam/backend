const express = require("express")
const router = express.Router()
const {addUser} = require("../controllers/users")
// const { validationUsers } = require("../middlewares/validationsMiddlewares")


router.post("/add", addUser)

module.exports = router

