var express = require("express");
const cors = require("cors")
const superHeros = require("./herosData")


const app = express()

app.use(express.json()) 
app.use(cors())

const port = 9000



app.get("/heros", (req, res) => {

    res.json(superHeros)
  })








app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
  })
  