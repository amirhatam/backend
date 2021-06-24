const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const config = require("./config.js")
const authUsersRoutes = require("./routes/authUsersRoutes")
const usersRoutes = require("./routes/getUsersRoutes")


mongoose.connect(config.mongoURL,{ useNewUrlParser: true, useUnfiedTopology: true}, (err) => {
    if (err) {
        console.log("There was a problem when connection to the database")
    } else {
        console.log("I'm connected to the database");
    }
})


const port = 8000

const app = express()
app.use(cors())


app.use(express.json())

app.use("/auth", authUsersRoutes)
app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})