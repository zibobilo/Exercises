// exercise 030
// https://projecteuler.net/problem=30
// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
// 1634 = 1e4 + 6e4 + 3e4 + 4e4
// 8208 = 8e4 + 2e4 + 0e4 + 8e4
// 9474 = 9e4 + 4e4 + 7e4 + 4e4
// As 1 = 14 is not a sum it is not included.
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
let num = 0
let total = 0
let nums = 0
let sum = 0

for (let z = 0; z < 10; z++) {
    for (let a = 0; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
            for (let c = 0; c < 10; c++) {
                for (let d = 0; d < 10; d++) {
                    for (let e = 0; e < 10; e++) {
                        if (z + a + b + c + d == 0) {
                            num = Math.pow(e, 5)
                            nums = Number(`${e}`)
                            if (num == nums) {
                                console.log(`result is: ${num} / numbers are ${nums}`)
                                sum += num
                            }
                        } else if (z + a + b + c == 0) {
                            num = Math.pow(d, 5) + Math.pow(e, 5)
                            nums = Number(`${d}${e}`)
                            if (num == nums) {
                                console.log(`result is: ${num} / numbers are ${nums}`)
                                sum += num
                            }
                        } else if (z + a + b == 0) {
                            num = Math.pow(c, 5) + Math.pow(d, 5) + Math.pow(e, 5)
                            nums = Number(`${c}${d}${e}`)
                            if (num == nums) {
                                console.log(`result is: ${num} / numbers are ${nums}`)
                                sum += num
                            }
                        } else if (z + a == 0) {
                            num = Math.pow(b, 5) + Math.pow(c, 5) + Math.pow(d, 5) + Math.pow(e, 5)
                            nums = Number(`${b}${c}${d}${e}`)
                            if (num == nums) {
                                console.log(`result is: ${num} / numbers are ${nums}`)
                                sum += num
                            }
                        } else if (z == 0) {
                            num = Math.pow(a, 5) + Math.pow(b, 5) + Math.pow(c, 5) + Math.pow(d, 5) + Math.pow(e, 5)
                            nums = Number(`${a}${b}${c}${d}${e}`)
                            if (num == nums) {
                                console.log(`result is: ${num} / numbers are ${nums}`)
                                sum += num
                            }
                        } else {
                            num = Math.pow(z, 5) + Math.pow(a, 5) + Math.pow(b, 5) + Math.pow(c, 5) + Math.pow(d, 5) + Math.pow(e, 5)
                            nums = Number(`${z}${a}${b}${c}${d}${e}`)
                            if (num == nums) {
                                console.log(`result is: ${num} / numbers are ${nums}`)
                                sum += num
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(sum-1)