// --------------------------------------------Exercice 20
// https://projecteuler.net/problem=20
// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!

let number = 1n
let sum = 0n

for (i=0;i<100;i++){
  number *= BigInt(i + 1);
}

console.log(number)
number = number.toString()

for(i=0 ; i<number.length ; i++){
  sum += BigInt(Number(number[i]))
}
console.log("Hello the sum is : " + sum)
