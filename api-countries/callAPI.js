var request = require("request");

request.get("http://localhost:8000/countries",  (err, res, body) => {



    var cnt = JSON.parse(body);
    var cntN = cnt.map( (elem) => {
        return elem
    })


    console.log(cntN.reverse());
});

