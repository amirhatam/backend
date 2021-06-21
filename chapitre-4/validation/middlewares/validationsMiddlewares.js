const expressValidator = require("express-validator");

const validationUsers = [
    expressValidator.body("username").isString(),
    expressValidator.body("email").isEmail(),
    expressValidator.body("age").isInt().isLength({ min: 2, max: 3 }),
    expressValidator.body("city").custom(value => {
        if(value === "Paris" || value === "Los Angeles" || value === "Tokyo") {
            return value
        }
    })
]

module.exports = {
    validationUsers
}