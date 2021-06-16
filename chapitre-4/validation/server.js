const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const expressValidator = require("express-validator");
const UserName = require('./models/userName');

mongoose.connect("mongodb://localhost:27017/usernameDB", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})


const port = 8000

const app = express()

app.use(cors())
app.use(express.json())


const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(debug)


app.get("/", async (req, res) => {
    try {
        
        const users = await UserName.find()
        res.json(users)
    }catch (err) {
        console.log("Error", error);
        res.status(500).json({message: "Erreur en traitant la requête"})
    }

})

app.post('/users/add',
  expressValidator.body("username").isEmail((value) => {
    var schema = new passwordValidator();
    schema
      .is().min(4)
      .is().max(20) 
      .has().not().spaces() 

    return schema.validate(value);
  }),
    (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty() === false) {
            res.json({
                errors: errors.array() 
            });
            return;
        } else {
            res.json({
                success: true,
                message: 'User will be saved'
            });
        }
    }
);

app.get("/users/:name", async (req, res) => {

    try {

        const username = req.params.username
        const user = await userName.findOne({ username: username })

        if (user) {
            res.json({ user })

        } else {
            res.json({
                message: "User not found"
            })
        }

    }
    catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "There was a problem" })
    }

});



app.get("*", (req, res) => {
    res.json({
        errorMessage: "The route was not found"
    }, 404)
})

app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})