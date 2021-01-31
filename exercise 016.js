// Exercice 16
// https://projecteuler.net/problem=16

// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 21000?


// let sum = 0;
// let num = BigInt(2**1000);


// for (let j = 0; j < num.toString().length; j++) {
//     sum += parseInt(num.toString().substr(j, 1));
// }

// console.log(sum);


function processData(input) {
    input = input.split("\n").map(inp => Number(inp))

    for (let i = 1; i < input.length; i++) {
     
      let num = 2n**BigInt(input[i]);
      let sum = String(num).split("").reduce((a,b) => Number(a) + Number(b))
      console.log(sum);
    }
} 

processData("3\n654\n9998")