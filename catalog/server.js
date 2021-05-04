const express = require("express")
const cors = require("cors")
const {movies} = require("./movieData.js")

const app = express()

app.use(cors())

const port = 8000

app.get("/movies/", (req,res) => {

  res.json({
    movies
  })
})

app.get("/movies/name/:film", (req,res) => {
  const film = req.params.film.toUpperCase()
  let resultMovies= []

  for (let index = 0; index < movies.length; index++) {
      const curFilm = movies[index];

      if (curFilm.title.toUpperCase() === film) {
        resultMovies.push(curFilm)
          // resultCountries=curFilm

      }
  }
  // const country = req.params.team.toLocaleUpperCase()
  res.json({
      resultMovies
  })
})



app.listen(port, () => {
  console.log("Server à l'écoute dans le port 8000");
})