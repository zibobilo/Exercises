//--------------------------------- exercice 21
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
// Evaluate the sum of all the amicable numbers under 10000.

function test(y) {
    let testCount = 0
    for (let i = 1; i < y; i++) {
        if (y % i === 0) {
            testCount += i
        }
    }
    return testCount
}

function result(x) {

    let totalCount = 0
    for (j = 1; j < x; j++) {
        let count = 0
        for (let i = 1; i < j; i++) {
            if (j % i === 0) {
                count += i

            }
        }
        if (test(count) == j && test(count) !== count) {
            totalCount += count
            console.log("number // count test // Count")
            console.log(j + "         " + test(count) + "        " + count)
            console.log("")
        }

    }
    return `the result is : ${totalCount} ! Thats the end for today`
}

console.log(result(10000))