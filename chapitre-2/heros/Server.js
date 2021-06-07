var express = require("express");
const cors = require("cors");
const superHeros = require("./herosData");

const port = 9000;
const app = express();

const debug = (req, res, next) => {
  console.log("I received a request !");

  next();
};

app.use(cors());
app.use(express.json());

app.use(debug);

app.get("/heroes", (req, res) => {
  res.json(superHeros);
});

app.get("/heroes/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  const findHero = superHeros.find((elem) => {
    return elem.name.toLowerCase() == name;
  });

  res.json(findHero);
});

app.get("/heroes/:name/powers", (req, res) => {
  const name = req.params.name.toLowerCase();

  const heroPower = superHeros.find((elem) => {
    return elem.name.toLowerCase() == name;
  });
  const powersHero = heroPower.power;

  res.json(powersHero);
});

const transformName = (req, res, next) => {
  // if (req.body.namr === undefined) {
  //   res.json({
  //     erroMessage: "To add a hero send at least he's name"
  //   })
  // } else {

  req.body.name = req.body.name.toLowerCase();
  // }

  next();
};

// const verifierNom = (req, res ,next) => {

//   const newHero = req.body.name.toLowerCase()

//   const herosName = superHeros.map((elem) => {
//     return elem.name.toLowerCase()
//   });

//   for ( var i = 0 ;i < herosName.length ; i++ ) {

//     if (herosName === newHero) {
//       res.json({
//         message: "hero existe",
//       });
//     } else {

//     }
//   }

//   console.log(herosName);

// next();

// }

app.post("/heroes", transformName, (req, res) => {
  // const newHero = req.body;

  const newHero = req.body.name.toLowerCase();

  const heroesName = superHeros.map((elem) => {
    return elem.name.toLowerCase();
  });

  console.log("heroesName", heroesName);
  // for (var i = 0; i < herosName.length; i++) {
    if (heroesName === newHero) {
      next();
      // res.json({
      //   message: "hero existe",
      // });
    } else {
      superHeros.push(newHero);

      res.json({
        message: "Ok, héros ajouté",
      });
    }
  // }

  // console.log("newHero",newHero);
  // console.log("herosName",herosName);

  res.json();
});

app.post("/heroes/:name/powers/", (req, res) => {
  const name = req.params.name.toLowerCase();

  const heroName = superHeros.find((elem) => {
    return elem.name.toLowerCase() == name;
  });

  const heroPowers = req.body.power;

  const powersH = heroName.power;

  powersH.push(heroPowers);

  res.json({
    message: "Pouvoir ajouté !",
  });
});

app.listen(port, () => {
  console.log("Server à l'écoute dans le port " + port);
});
