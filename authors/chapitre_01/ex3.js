

const express = require('express');
const port = 8000;

const app = express();


var books = [

  'Beowulf',
  'Hamlet, Othello, Romeo and Juliet, MacBeth',
  'Oliver Twist, A Christmas Carol',
  'The Picture of Dorian Gray, The Importance of Being Earnest'
]
// Routes
app.get('/authors/1/books/', (req, res) => {
  res.send(books[0]);
});

app.get('/authors/2/books/', (req, res) => {
    res.send(books[1]);
});

app.get('/authors/3/books/', (req, res) => {
    res.send(books[2]);
});
app.get('/authors/4/books/', (req, res) => {
    res.send(books[3]);
});

app.get('/authors/:name/books', (req, res) => {
    res.send(`books ${req.params.name} !`);
});




app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});