var express = require("express");
const cors = require("cors");
const superHeros = require("./herosData");

const app = express();

app.use(express.json());
app.use(cors());

const port = 9000;

app.get("/heroes", (req, res) => {
  res.json(superHeros);
});




app.get("/heroes/:name",(req, res) => {
  const name = req.params.name;

 const findHero = superHeros.find(elem => {
     return elem.name == name
 })
 
  res.json(findHero);
});

app.get("/heroes/:name/powers",(req, res) => {
  const power = req.params.powers;
  
 const heroPower = superHeros.find(elem => {
     return elem.power == power
 })

  res.json(heroPower);
});

app.listen(port, () => {
  console.log("Server à l'écoute dans le port " + port);
});
