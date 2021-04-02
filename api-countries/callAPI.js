var request = require("request");

request.get("http://localhost:8000/countries", function (err, res, body) {



    var cnt = JSON.parse(body);
    var cntN = cnt.map(function (elem) {
        return elem
    })


    console.log(cntN.reverse());
});

