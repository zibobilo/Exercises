// --------------------------------------- Exercice 10
// https://projecteuler.net/problem=10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.


let primes = [];
let count = 1;
let stopProcess = 1000000;
let sum = 0;

for (let i = 2; i < stopProcess; i++) {
    primes[i] = true;
}

let limit = Math.sqrt(stopProcess);

for (let i = 2; i < limit; i++) {
    for (let j = i * i; j < stopProcess; j += i) {
        primes[j] = false;
    }
}

for (let i = 2; i < stopProcess; i++) {
    if (primes[i] === true) {
        count += 1
        sum += i
    }
}
console.log(sum)


     // let primes = [2n]
// function getNextPrime() {
        //     for (let i = lastPrime + 1n; i <= n; i++) {
        //         for (let j = 0; j < primes.length; j++) {
        //             if (i % primes[j] === 0n) break
        //             if (j === primes.length - 1) {
        //                 primes.push(i)
        //                 lastPrime = i
        //                 return
        //             }
        //         }
        //     }
        // }
        // let lastPrime = primes[primes.length-1]
        // while(lastPrime < n) {
            
        //     if (n % lastPrime === 0n) {
        //         n = n/lastPrime
        //     }
        //     getNextPrime()
        // }
        // console.log(String(lastPrime).slice(0, lastPrime.length))
    // }
    
