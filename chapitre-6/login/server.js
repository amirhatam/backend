const express = require("express")
const mongoose = require("mongoose")
const usersRoutes = require("./routes/usersRoutes")


mongoose.connect("mongodb://localhost:27017/usernameDB", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})


const port = 8000

const app = express()

app.use(express.json())

app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})