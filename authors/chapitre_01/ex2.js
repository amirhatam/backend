const express = require('express');
const port = 8000;

const app = express();


// Routes
app.get('/authors/1/', (req, res) => {
  res.send('Lawrence Nowell, UK');
});
app.get('/authors/2/', (req, res) => {
  res.send('William Shakespeare, UK');
});
app.get('/authors/3/', (req, res) => {
  res.send('Charles Dickens, US');
});
app.get('/authors/4/', (req, res) => {
  res.send('Oscar Wilde, UK');
});


// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});