const express = require('express');
const port = 8000;

const app = express();


// Routes
app.get('/', (req, res) => {
  res.send('Authors API');
});


// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});