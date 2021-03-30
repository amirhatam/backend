const express = require('express');
const port = 8000;

const app = express();


// Routes
app.get('/authors/1/books/', (req, res) => {
  res.send('Beowulf');
});
app.get('/authors/2/books/', (req, res) => {
  res.send('Hamlet, Othello, Romeo and Juliet, MacBeth');
});
app.get('/authors/3/books/', (req, res) => {
  res.send('Oliver Twist, A Christmas Carol');
});
app.get('/authors/4/books/', (req, res) => {
  res.send('The Picture of Dorian Gray, The Importance of Being Earnest');
});


// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});