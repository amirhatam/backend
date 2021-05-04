const express = require("express")
const cors = require("cors")
const {countriesData2} = require("./test.js")

const app = express()

app.use(cors())

const port = 8000





app.get("/countries/", (req,res) => {

    res.json({
        countriesData2
    })
})

app.get("/countries/name/:pays", (req,res) => {
    const pays = req.params.pays.toUpperCase()
    let resultCountries= []

    for (let index = 0; index < countriesData2.length; index++) {
        const curPays = countriesData2[index];

        if (curPays.name.toUpperCase() === pays) {
            resultCountries.push(curPays)
            // resultCountries=curPays

        }
    }
    // const country = req.params.team.toLocaleUpperCase()
    res.json({
        resultCountries
    })
})




app.listen(port, () => {
    console.log("Server à l'écoute dans le port 8000");
})