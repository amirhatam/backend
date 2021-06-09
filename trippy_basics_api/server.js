const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Hotel = require("./hotel")
const Restaurant = require("./restaurant")

mongoose.connect("mongodb://localhost:27017/trippyDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000

const app = express()

const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(cors())

app.use(express.json())

app.use(debug)

app.get("/hotel", async (req, res) => {

    try {
        const hotel = await Hotel.find()

        res.json(hotel)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

})

app.get("/heroes/:id", async (req, res) => {

    try {
        const idHotel = req.params.id
        const hotel = await findHero(idHotel)

        if (hotel) {
            res.json({ hotel })
        } else {
            res.json({
                message: "Hotel not found"
            })
        }
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})




app.get("/restaurants", async (req, res) => {

    try {
        const restaurant = await Restaurant.find()

        res.json(restaurant)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

})




app.get("*", (req, res) => {
    res.json({
        errorMessage: "The route was not found"
    }, 404)
})

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})