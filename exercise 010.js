// --------------------------------------- Exercice 10
// https://projecteuler.net/problem=10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

let sum = 2
// Itarate through each number from 3 to below 2 million
for (let i = 3; i < 2000000; i += 2) {
    if (isPrime(i)) sum += i
}

function isPrime (num) {
  for (let j = 3; j <= Math.floor(Math.sqrt(num)); j+=2) {
    if (!(num % j)) return false
  }
  return true
}
console.log(sum)

// => 142913828922
// => +-0.5 s
