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

app.get("/movies/:id", (req,res) => {
  const id = req.params.id
  let movieDetails= []
 
  for (let index = 0; index < movies.length; index++) {
   
      const curFilm = movies[index];
    
      if (curFilm.id == id) {
      
        movieDetails.push(curFilm)
         

      }
  }
 
  res.json({
    movieDetails
  })
})



app.listen(port, () => {
  console.log("Server à l'écoute dans le port 8000");
})