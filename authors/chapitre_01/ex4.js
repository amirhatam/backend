const express = require('express');
const port = 8000;

const app = express();

var authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK"
  },
  {
    books: ["Beowulf"]
  }
]

// Routes
app.get('/json/authors/:id', (req, res) => {
  res.send(authors[0]);
});
app.get('/authors/2/books/', (req, res) => {
  res.send({ name: "Lawrence Nowell", nationality: "UK" });
});
app.get('/json/authors/:id/books', (req, res) => {
  res.send(authors[1]);
});



// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});