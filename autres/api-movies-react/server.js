const express = require("express")
const cors = require("cors")
const dataMoviesPopulair = require("./dataMoviesPopulair.js")
// const dataMoviesWeekly = require("./dataMoviesWeekly.js")
const urlWeekly = require("./App.js")

const app = express()

app.use(cors())

const port = 8000




app.get('/movies/populair', (req, res) => {
    res.send(dataMoviesPopulair);
  });

// app.get('/movies/weekly', (req, res) => {
//     res.send(dataMoviesWeekly);
//   });

app.get('/movies/weekly', (req, res) => {



  
    res.json(urlWeekly);
  });





// app.get("/movies/title/:movie", (req,res) => {
//     const movie = req.params.movie.toUpperCase()
//     let resultMovies= []

//     for (let index = 0; index < dataMovies.length; index++) {
//         const curmovies = dataMovies[index];

//         if (curmovies.title.toUpperCase() === movie) {
//             resultMovies.push(curmovies)
//             // resultCountries=curPays

//         }
//     }
//     // const country = req.params.team.toLocaleUpperCase()
//     res.json({
//         resultMovies
//     })
// })


app.listen(port, () => {
    console.log("Server à l'écoute dans le port 8000");
})