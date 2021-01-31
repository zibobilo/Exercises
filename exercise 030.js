// exercise 030
// https://projecteuler.net/problem=30
// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
// 1634 = 1e4 + 6e4 + 3e4 + 4e4
// 8208 = 8e4 + 2e4 + 0e4 + 8e4
// 9474 = 9e4 + 4e4 + 7e4 + 4e4
// As 1 = 14 is not a sum it is not included.
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits. ===  0
let nums = 0
let sum = 0

function pow5(num) {
  return Math.pow(num, 5)
}

function test(z, a, b, c, d, e) {
  if (z + a + b + c + d == 0) {
    if (pow5(e) === Number(`${e}`)) {
      sum += Number(`${e}`)
    }
  } else if (z + a + b + c == 0) {
    if (pow5(d) + pow5(e) === Number(`${d}${e}`)) {
      sum += Number(`${d}${e}`)
    }
  } else if (z + a + b == 0) {
    if (pow5(c) + pow5(d) + pow5(e) === Number(`${c}${d}${e}`)) {
      sum += Number(`${c}${d}${e}`)
    }
  } else if (z + a == 0) {
    if (pow5(b) + pow5(c) + pow5(d) + pow5(e) === Number(`${b}${c}${d}${e}`)) {
      sum += Number(`${b}${c}${d}${e}`)
    }
  } else if (z == 0) {
    if (pow5(a) + pow5(b) + pow5(c) + pow5(d) + pow5(e) === Number(`${a}${b}${c}${d}${e}`)) {
      sum += Number(`${a}${b}${c}${d}${e}`)
    }
  } else {
    if (pow5(z) + pow5(a) + pow5(b) + pow5(c) + pow5(d) + pow5(e) === Number(`${z}${a}${b}${c}${d}${e}`)) {
      sum += Number(`${z}${a}${b}${c}${d}${e}`)
    }
  }
}

for (let z = 0; z < 10; z++) {
  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      for (let c = 0; c < 10; c++) {
        for (let d = 0; d < 10; d++) {
          for (let e = 0; e < 10; e++) {
            test(z, a, b, c, d, e)
          }
        }
      }
    }
  }
}

console.log(sum - 1)

// => 443839
// => +-0.6 s