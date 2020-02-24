// --------------------------------------  exercice 7
// https://projecteuler.net/problem=7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?


function printPrime(value) {
    let primes = [];
    let count = 1;
    for(let i = 2; i < value; i++) {
        primes[i] = true;
        
    }
    let limit = Math.sqrt(value);
    for(let i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(let j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(let i = 2; i < value; i++) {
        if(primes[i] === true) {
            count += 1
            if (count === 10001){
            console.log(i + " " + primes[i] + "  # " + count);
            
            }
        }
    }
}
printPrime(110000)