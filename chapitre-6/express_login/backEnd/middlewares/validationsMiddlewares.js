const expressValidator = require("express-validator");

const validationUsers = [
    // expressValidator.body("firstName").isString(),
    expressValidator.body("password").isInt().isLength({ min: 8, max: 20 }),
   
]

module.exports = {
    validationUsers
}