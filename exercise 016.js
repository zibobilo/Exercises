// Exercice 16
// https://projecteuler.net/problem=16

// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 21000?



// npm install big-integer

var bigInt = require("big-integer");
var sum = 0;
var num = bigInt(2**1000);


for (var j = 0; j < num.toString().length; j++) {
    sum += parseInt(num.toString().substr(j, 1));
}

console.log(sum);