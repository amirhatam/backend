const express = require("express")
const cors = require("cors")
const {countriesData} = require("./dataCountries.js")

const app = express()

app.use(cors())

const port = 8000





app.get("/countries/", (req,res) => {

    res.json({
        countriesData
    })
})

app.get("/countries/name/:name", (req,res) => {
    const name = req.params.name.toUpperCase()
    const resultCountries= []

    for (let index = 0; index < countriesData.length; index++) {
        const curPays = countriesData[index];

        if (curPays.name.toUpperCase() === name || curPays.name.toUpperCase() === name) {
            resultCountries.push(curPays)
        }
    }
    // const country = req.params.team.toLocaleUpperCase()
    res.json({
        resultCountries
    })
})

// app.get("/countries/france", (req,res) => {

//     res.json({
//         franceData
//     })
// })
// app.get("/countries/brazil", (req,res) => {

//     res.json({
//         brazilData
//     })
// })
// app.get("/countries/croatia", (req,res) => {

//     res.json({
//         croatiaData
//     })
// })







// app.get("/countries/name/:name", (req, res) => {

//     const name = req.params.name.toUpperCase()

//     // console.log("my team", team);

//     const country = []

//     // for (let index = 0; index < matches.length; index++) {
//     //     const curMatch = matches[index];

//     //     if (curMatch.teamLocal.toUpperCase() === team || curMatch.teamVisit.toUpperCase() === team) {
//     //         country.push(curMatch)
//     //     }
//     // }

//     console.log("country", country);

//     res.json({
//         country
//     })
// })










app.listen(port, () => {
    console.log("Server à l'écoute dans le port 8000");
})