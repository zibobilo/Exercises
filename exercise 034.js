// Exercise 34
// https://projecteuler.net/problem=34

// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145. (1x1 + 4x3x2x1 + 5x4x3x2x1 = 145)
// Find the sum of all numbers which are equal to the sum of the factorial of their digits.
// Note: as 1! = 1 and 2! = 2 are not sums they are not included.


let testNum = 1
let testTotal = 0
let interestingNums = []
for (let i = 3; i < 41000; i++) {
    for (let j = 0; j < String(i).length; j++) {
        for (let k = 2; k <= String(i)[j]; k++) {
            testNum *= k
        }
        testTotal += testNum
        testNum = 1
    }
    if (testTotal == i) {
        interestingNums.push(testTotal)
    }
    testTotal = 0
}
console.log(interestingNums)
console.log(interestingNums[0] + interestingNums[1])

// [ 145, 40585 ]
// => 40730

// +- 0.1 s
