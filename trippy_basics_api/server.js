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

        res.json({ errorMessage: "There was a probleme " }, 500)
    }

})

app.get("/hotel/:id", async (req, res) => {
    
    try {
        const idHotel = req.params.id
        const hotel = await Hotel.findById(idHotel)

        console.log("hotel:", hotel)


        if (hotel) {
            res.json({ hotel })
        } else {
            res.json({
                message: "Hotel not found"
            })
        }
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem" })
    }

})




const transformName = (req, res, next) => {
    if (req.body.name === undefined) {
        res.json({
            errorMessage: "To add a hero send at least he's name"
        })
    } else {
        req.body.name = req.body.name

        next()
    }
}


app.post("/hotel",transformName,  async (req, res, next) => {
    try {
        const addHotel = req.body
        const hotel = await Hotel.findOne({addHotel})
        // const hotel = await findHotel(addHotel.name)

        if (hotel) {
            res.status(400).json({
                message: "The hotel already exists"
            })
        } else {
            next()
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem" })
    }
}, async (req, res) => {

    try{
        const hotel = req.body
        
        const newHotel = await Hotel.create(hotel)
        res.json({
            message: "Ok, hotel ajouté",
            newHotel
        })
    }catch(err){
        console.error(err)
        res.status(500).json({errorMessage:"There was a problem"})
    }
})



app.get("/restaurants", async (req, res) => {
    
    try {
        const restaurant = await Restaurant.find()
        
        res.json(restaurant)
    } catch (err) {
        console.error(err)
        
        res.json({ errorMessage: "There was a probleme " }, 500)
    }
    
})


app.get("/restaurants/:id", async (req, res) => {
    
    try {
        const idRestaurant = req.params.id
        const restaurant = await Restaurant.findById(idRestaurant)

        console.log("hotel:", restaurant)


        if (restaurant) {
            res.json({ restaurant })
        } else {
            res.json({
                message: "Restaurant not found"
            })
        }
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem" })
    }

})

app.post("/restaurants",transformName,  async (req, res, next) => {
    try {
        const addRestaurant = req.body
        const restaurant = await Restaurant.findOne({addRestaurant})
        // const hotel = await findHotel(addHotel.name)

        if (restaurant) {
            res.status(400).json({
                message: "The restaurant already exists"
            })
        } else {
            next()
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem" })
    }
}, async (req, res) => {

    try{
        const restaurant = req.body
        
        const newRestaurant = await Restaurant.create(restaurant)
        res.json({
            message: "Ok, Restaurant ajouté",
            newRestaurant
        })
    }catch(err){
        console.error(err)
        res.status(500).json({errorMessage:"There was a problem"})
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