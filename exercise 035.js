// Exercise 35
// https://projecteuler.net/problem=35

// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
// How many circular primes are there below one million?


let limit = 1000000
let answer = 0

function isPrime(number) {
    if (number == 0 || number == 1) return false
    else if (number == 2) return true
    else if (number % 2 == 0) return false
    for (let i = 3; i <= Math.floor(Math.sqrt(number)); i += 2) {
        if (!(number % i)) return false
    }
    return true
}

for (let i = 0; i < limit; i++) {
    let rotationTesting = []
    let toAddAtTheBack

    if (isPrime(i)) {
        for (let s = 0; s < String(i).length; s++) {
            rotationTesting.push(String(i)[s])
        }
        let testCount = 0
        for (let r = 0; r < String(i).length - 1; r++) {
            toAddAtTheBack = rotationTesting.pop(Number(rotationTesting.length));
            rotationTesting.unshift(toAddAtTheBack);
            if (isPrime(Number(rotationTesting.join("")))) {
                testCount++
            } else { testCount = 0; break; }
        }
        if (testCount == Number(String(i).length) - 1 || Number(String(i).length) == 1) {
            answer++
            testCount = 0
        }
    }
}

console.log(answer)

// => 55
// => +-0.3s
