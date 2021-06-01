var express = require("express");
const cors = require("cors");
const superHeros = require("./herosData");

const port = 9000;
const app = express();

const debug = (req, res, next) => {
  console.log("I received a request !")

  next()
}


app.use(cors());
app.use(express.json());

app.use(debug)

const transformName = (req, res, next) => {


  if (req.body.namr === undefined) {
    res.json({
      erroMessage: "To add a hero send at least he's name"
    })
  } else {

    req.body.name = req.body.name.toLowerCase();
  }

  next();
};

app.get("/heroes", (req, res) => {
  res.json(superHeros);
});

app.get("/heroes/:name", (req, res) => {
  const name = req.params.name.toLowerCase()
  
const findHero = superHeros.find((elem) => {
 return elem.name.toLowerCase() == name;
   
});

  res.json(findHero);
});



app.get("/heroes/:name/powers", (req, res) => {
  const name = req.params.name.toLowerCase()

  const heroPower = superHeros.find((elem) => {
    return elem.name.toLowerCase() == name;
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
  const name = req.params.name.toLowerCase()

  const heroName = superHeros.find((elem) => {
    return elem.name.toLowerCase() == name;
  });


  const heroPowers = req.body.power;
  
  const powersH = heroName.power

  powersH.push(heroPowers)

  res.json({
    message: "Pouvoir ajouté !",
  });
});





app.listen(port, () => {
  console.log("Server à l'écoute dans le port " + port);
});
