// exercise 037
// https://projecteuler.net/problem=37
// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, 
// and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

function isPrime(number) { 
    if (number === 1) return false
    else if (number === 2) return true
    else if (number % 2 === 0) return false
    for (let j = 3; j <= Math.floor(Math.sqrt(number)); j+=2) {
        if (!(number % j)) return false
    }
    return true
}

let primeArr = [2, 3, 5, 7]
    
for (let i = 11; i < 750000; i+=2) {
    if (isPrime(i)) {
        primeArr.push(i)
    }
}

let count = 0

// Addition of all total numbers
let sum = 0

for (let i = 4; i < primeArr.length; i++) {
    
    // Lets count how many times we need to truncate the number
    for (let t = 1; t < String(primeArr[i]).length; t++) {
        
        // Checking for each length of truncation whether each truncated sides are primes
        if (isPrime(Number(String(primeArr[i]).slice(0, t))) &&
            isPrime(Number(String(primeArr[i]).slice(t, String(primeArr[i]).length+1)))) {
            count++ 
        }
    } 
    if (count == String(primeArr[i]).length-1) {
        sum += primeArr[i]
    }
    count = 0
}
console.log(sum)

// => 748317

// +- 0.2 s
