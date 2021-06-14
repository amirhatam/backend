const express = require('express');
const multer = require('multer');
const cors = require("cors")
const fs = require("fs");
const path = require("path");

const upload = multer({ dest: 'public/uploads/' });

const port = 8000

const app = express();

app.use(cors())

app.use(express.static('public'));


// app.get("/upload", async (req, res) => {

//     try {
//         const upload = await upload.find()

//         res.json(upload)
//     } catch (err) {
//         console.error(err)

//         res.json({ errorMessage: "There was a probleme " }, 500)
//     }

// })


app.post('/upload', upload.single('image'), (req, res) => {
    console.log("req.body", req.body);
    console.log("req.file", req.file);

    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));

    res.send("ok");
});

app.listen(port, () => {
    console.log("The server is listing in the port: ", port)
})