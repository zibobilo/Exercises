// ---------------------------------------------- Exercice 31
// https://projecteuler.net/problem=31
// In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

let limit = 200

let acent = 1
let bcent = 2
let ccent = 5
let dcent = 10
let ecent = 20
let fcent = 50
let gcent = 100

// starts at 1 => it corresponds to the 2 pounds coin which consists of only one possibility
let ways = 1

// a represent the number of one cent coin
// b represent the number of two cent coin
// ...

// For each loop, if the rolling amount surpasses the 200 cents limit no need to go further.

for (let a = 0; a <= limit; a++) {
  for (let b = 0; b <= limit; b++) {
    if (a * acent + b * bcent > limit) break;

    for (let c = 0; c <= limit; c++) {
      if (a * acent + b * bcent + c * ccent > limit) break;

      for (let d = 0; d <= limit; d++) {
        if (a * acent + b * bcent + c * ccent + d * dcent > limit) break;

        for (let e = 0; e <= limit; e++) {
          if (a * acent + b * bcent + c * ccent + d * dcent + e * ecent > limit) break;

          for (let f = 0; f <= limit; f++) {
            if (a * acent + b * bcent + c * ccent + d * dcent + e * ecent + f * fcent > limit) break;

            for (let g = 0; g <= limit; g++) {
              if (a * acent + b * bcent + c * ccent + d * dcent + e * ecent + f * fcent + g * gcent > limit) break;

              if (a * acent + b * bcent + c * ccent + d * dcent + e * ecent + f * fcent + g * gcent === limit) {
                ways++                
              }
            }
          }
        }
      }
    }
  }
}

console.log(ways)
// => 73682
// => +-0.1 s