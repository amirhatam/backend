var request = require("request");

request.get("http://localhost:8000/countries", function (err, res, body) {
    console.log(err);
    console.log(res.statusCode);
    console.log(body);
});