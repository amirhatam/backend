var request = require("request");

request.get("http://localhost:8000/countries",  (err, res, body) => {



    var cnt = JSON.parse(body);
    var cntN = cnt.map( (elem) => {
        return elem
    })


    console.log(cntN.reverse());
});


request.get("http://localhost:8000/countries:name/capital",  (err, res, body) => {



    var capt = JSON.parse(body);
    var capital = capt.map( (elem) => {
        return elem
    })


    console.log(capital.reverse());
});

