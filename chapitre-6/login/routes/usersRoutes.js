const express = require("express")
const router = express.Router()
const {addUser, logInUser} = require("../controllers/users")
const { validationUsers } = require("../middlewares/validationsMiddlewares")


router.post("/signIn",validationUsers ,addUser)
router.post("/logeIn",logInUser)

module.exports = router

