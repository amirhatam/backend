var express = require("express");
const cors = require("cors")
const {stutentsData} = require("./studentsData.js")

const app = express()

app.use(express.json()) 
app.use(cors())

const port = 9000

app.use((req, res, next) => {
  console.log("I received a request at ", new Date().toTimeString());

  next()
})


app.get("/students", (req, res) => {

  res.json(stutentsData)
})

app.post("/students", (req, res) => {
  const newStudent = req.body
  
  stutentsData.push(newStudent)

  res.json({

    name: ""
  }
  )
})






app.listen(port, () => {
  console.log("Server à l'écoute dans le port " + port);
})


