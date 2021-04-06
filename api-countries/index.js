
const express = require('express');
const port = 8000;

const app = express();

var cors = require('cors')
app.use(cors())


// Routes
app.get('/countries', (req, res) => {
    res.send(["Italy ", " Cuba ", " Japan ", " Iran ", " Spain"]);
});


// Run server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});