const mongoose = require('mongoose')
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');

mongoose.connect("mongodb://localhost:27017/trippyDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addHotel = async () => {

    try {
        await Hotel.deleteMany({})

        await Hotel.insertMany([
            {
                name: "HBC",
                address: "12 rue Passy,16éme",
                city: "Paris",
                country: "France",
                stars: 6,
                hasSpa: true,
                hasPool: true,
                priceCategory : 200,
            },
            {
                name: "Tivoli",
                address: "12 street M.J",
                city: "New-York",
                country: "USA",
                stars: 6,
                hasSpa: true,
                hasPool: true,
                priceCategory : 250,
            }
        ])

        console.log("The collection heros was recreated with the base data");
        
    } catch (err) {
        console.error(err)
    }
}

addHotel()


const addRestaurant = async () => {

    try {
        await Restaurant.deleteMany({})

        await Restaurant.insertMany([
            {
                name: "HBC",
                address: "12 street M.J",
                city: "New-York",
                country: "USA",
                stars: 6,
                cuisine:4,
                priceCategory : 200,
            }
        ])

        console.log("The collection heros was recreated with the base data");
        
    } catch (err) {
        console.error(err)
    }
}

addRestaurant()