const express = require('express');
const port = 8000;

const app = express();

var authors = [
  'Lawrence Nowell, UK',
  'William Shakespeare, UK',
  'Charles Dickens, US',
  'Oscar Wilde, UK'
]
// Routes
app.get('/authors/1/', (req, res) => {
  res.send(authors[0]);
});
app.get('/authors/2/', (req, res) => {
  res.send(authors[1]);
});
app.get('/authors/3/', (req, res) => {
  res.send(authors[2]);
});
app.get('/authors/4/', (req, res) => {
  res.send(authors[3]);
});
app.get('/authors/:name/', (req, res) => {
  res.send(`Authors ${req.params.name} !`);
});


// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});