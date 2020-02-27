// exercise 27
// https://projecteuler.net/problem=27


// Euler discovered the remarkable quadratic formula:
// n2+n+41
// It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41 is clearly divisible by 41.
// The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.
// Considering quadratics of the form:
// n2+an+b, where |a|<1000 and |b|≤1000
// where |n| is the modulus/absolute value of n
// e.g. |11|=11 and |−4|=4
// Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.


// This fonction will help us determine if a number is a prime.
function isPrime(number) {
    if (number < 2) { return false }
    else if (number == 2) { return true }
    else {
        for (let x = 2; x < number; x++) {
            if (number % x === 0) { return false; }
        }
        return true
    }
}


//  Now I am testing how many times there are consecutive primes for each "n" remplaced in the quadratic formula 
let max = 0
let maxA = 0
let maxB = 0
let testPrime = 0
let maxN = 2000

for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
        for (let n = 0; n < maxN; n++) {
            testPrime = n * n + a * n + b
            if (isPrime(testPrime)) {
                if (n > max) {
                    max = n
                    maxA = a
                    maxB = b
                    console.log(`n: ${n} // a: ${a} // b: ${b}`)
                }
            } else {
                break;
            }
        }

    }
}
console.log()
console.log(`the product of a*b is => ${maxA * maxB}`)