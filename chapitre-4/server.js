const express = require("express")
const cors = require("cors")
const multer = require('multer');
const fs = require("fs")
const path = require("path")
const mongoose = require("mongoose")
const userName = require('./models/userName');

mongoose.connect("mongodb://localhost:27017/username", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const upload = multer({ dest: 'public/uploads/' });

const port = 9000

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static("./public"))

app.get("/", async (req, res) => {
    try {
        const users = await userName.find({})
        res.json(users)
    }catch (err) {
        console.log("Error", error);
        res.status(500).json({message: "Erreur en traitant la requête"})
    }


})


app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})