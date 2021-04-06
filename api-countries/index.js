
const express = require('express');
const port = 8000;

const app = express();

var cors = require('cors')
app.use(cors())


// Routes
app.get('/countries:name', (req, res) => {
    res.send(["Italy ", " Cuba ", " Japan ", " Bali ", " Spain"]);
});
app.get('/countries:name/capital', (req, res) => {
    res.send(["Rome ", " Havane ", " Tokyo ", " Bali ", " Madrid"]);
});


// Run server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});