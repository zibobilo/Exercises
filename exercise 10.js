// --------------------------------------- Exercice 10
// https://projecteuler.net/problem=10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.


let primes = [];
let count = 1;
let stopProcess = 2000000; 
let sum = 0;

for(let i = 2; i < stopProcess; i++) {
    primes[i] = true;
}

let limit = Math.sqrt(stopProcess);

for(let i = 2; i < limit; i++) {
    for( let j = i * i; j < stopProcess; j += i) { 
        primes[j] = false;
    }
}

for(let i = 2; i < stopProcess; i++) {
    if(primes[i] === true) {
        count += 1
        sum += i
    } 
}
console.log(sum)