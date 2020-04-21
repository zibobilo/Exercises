// exercise 037
// https://projecteuler.net/problem=37
// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, 
// and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.


function isPrime(number) {
    if (number == 1) {
        return false
    } else if (number == 2) {
        return true
    }
    for (let j = 2; j < number; j++) {
        if (number % j !== 0) { }
        else { return false }
    }
    return true
}


function truncPrimes() {

    // technically unlimited iterations until the 11 prime numbers are found
    let limit = 10000000

    // counting how many times the truncation went successful
    let count = 0

    // Must be equal to 11 to stop the function
    let totalNums = 0

    // lets push the selected numbers in an Array
    let arrTotalNums = []

    // Addition of all total numbers
    let sumOfTotal = 0

    for (let i = 10; i < limit; i++) {

        // The truncated number has to be a prime
        if (isPrime(i)) {
            count = 0

            // Lets count how many times we need to truncate the number
            for (let t = 1; t < String(i).length; t++) {

                // Checking for each length of truncation whether each truncated sides are primes
                if (isPrime(Number(String(i).slice(0, t))) &&
                    isPrime(Number(String(i).slice(t, String(i).length + 1)))) {
                    count++
                }
            }

            if (count == String(i).length - 1) {
                console.log(`We have a winner : ${i}`)
                totalNums++
                sumOfTotal += i
            }
        }
        if (totalNums == 11) {
            break
        }
    }
    console.log(`we have ${totalNums} numbers for a sum of ${sumOfTotal}`)
}

truncPrimes()
