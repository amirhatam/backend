var express = require("express");
const cors = require("cors");
const superHeros = require("./herosData");

const app = express();

app.use(express.json());
app.use(cors());

const port = 9000;

const transformName = (req, res, next) => {
  // const newHero = req.body.toLowerCase()
  req.body.name = req.body.name.toLowerCase();
  console.log(req.body.name);

  next();
};

app.get("/heroes", (req, res) => {
  res.json(superHeros);
});

app.get("/heroes/:name", (req, res) => {
  const name = req.params.name;
  // const name = req.params.name.toLowerCase()

  //  console.log("name params",name);

  const findHero = superHeros.find((elem) => {
    // console.log(elem.name);
    return elem.name == name;
  });
  // console.log(findHero);

  res.json(findHero);
});

app.get("/heroes/:name/powers", (req, res) => {
  const name = req.params.name;

  const heroPower = superHeros.find((elem) => {
    return elem.name == name;
  });
  const powersHero = heroPower.power;

  res.json(powersHero);
});

app.post("/heroes", transformName, (req, res) => {
  const newHero = req.body;

  superHeros.push(newHero);

  res.json({
    message: "Ok, héros ajouté",
  });
});

app.post("/heroes/:name/powers/", (req, res) => {
  const name = req.params.name;

  const heroName = superHeros.find((elem) => {
    return elem.name == name;
  });

  // console.log(heroName);

  const heroPowers = req.body.power;

  console.log(heroPowers);

  // heroName.push(heroPowers)

  res.json({
    message: "Pouvoir ajouté !",
  });
  // next()
});

app.listen(port, () => {
  console.log("Server à l'écoute dans le port " + port);
});
