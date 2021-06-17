const expressValidator = require("express-validator");

const validationHotels = [
    expressValidator.body("username").isString(),
    expressValidator.body("email").isString(),
    expressValidator.body("age").isInt({ min: 18, max: 100 }),
    expressValidator.body("city").isString(),
]

module.exports = {
    validationHotels
}