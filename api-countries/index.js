// const express = require('express');
// const app = express();

// const port = 8000;

// app.get('/countries ', (req, res) => {
//     res.send(["Italy", "USA", "Inde", "UK", "Spain"]);
// });


// app.listen(port, () => {
//     console.log('Server started on port: ' + port);
// });





const express = require('express');
const port = 8000;

const app = express();


// Routes
app.get('/countries', (req, res) => {
    res.send(["Italy", "USA", "Inde", "UK", "Spain"]);
});


// Run server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});