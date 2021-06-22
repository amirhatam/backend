const expressValidator = require("express-validator");

const validationUsers = [
    expressValidator.body("username").isString(),
    expressValidator.body("password").isInt(),
   
]

module.exports = {
    validationUsers
}