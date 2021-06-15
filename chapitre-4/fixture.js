const mongoose = require('mongoose')
const UserName = require('./models/username');

mongoose.connect("mongodb://localhost:27017/usernameDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addUserName = async () => {

    try {
        await UserName.deleteMany({})

        await UserName.insertMany([
            {
                username: "Amir",
                email: "amirhatam136@gmail.com",
                age: 34,
                city: "Los Angeles",
            },
            {
                username: "Karim",
                email: "karim@gmail.com",
                age: 38,
                city: "Paris",
            }
        ])

        console.log("The collection heros was recreated with the base data");

    } catch (err) {
        console.error(err)
    }
}

// addUserName()



