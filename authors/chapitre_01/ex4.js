const express = require('express');
const port = 8000;

const app = express();


// Routes
app.get('/json/authors/:id', (req, res) => {
  res.send('Beowulf');
});
app.get('/authors/2/books/', (req, res) => {
  res.send({name: "Lawrence Nowell",nationality: "UK"});
});
app.get('/json/authors/:id/books', (req, res) => {
  res.send({books: ["Beowulf"]});
});



// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});