const expressValidator = require("express-validator");

const validationUsers = [
    expressValidator.body("username").isString(),
    expressValidator.body("email").isString(),
    expressValidator.body("age").isInt().isLength({ min: 2, max: 3 }),
    expressValidator.body("city").isString(),
]

module.exports = {
    validationUsers
}