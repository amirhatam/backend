const express = require("express")
const router = express.Router()
const {signup, login} = require("../controllers/authUsers")
const { validationUsers } = require("../middlewares/validationsMiddlewares")


router.post("/signup",validationUsers ,signup)

router.post("/login",login)


module.exports = router
