const arr = [1, 0, 0, 0, 1, 0]

var zeroNum = []
var othersNum = []

for (var i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
        zeroNum++
    } else {
        othersNum++
    }
}

console.log("number of zero :", zeroNum);

console.log("number of others number :", othersNum);