// Problem 39
// https://projecteuler.net/problem=39
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
// {20,48,52}, {24,45,51}, {30,40,50}
// For which value of p ≤ 1000, is the number of solutions maximised?

// a2+b2 = c2   => Thanks Pythagore

let limit = 1001
let periCount = []
let maxCount = 0
let result

for (let i = 1; i < 1001; i++) {

  let start = Math.floor(Math.sqrt(i))
  let end = Math.floor(Math.cbrt(i))

  for (let a = start; a < i-2*a; a++) {

    for (let b = start; b < i; b++) {

      let c = Math.floor(Math.sqrt((a * a) + (b * b)))
        if (a + b + c == i) {
          if (a*a + b*b === c*c) {

          periCount.push(`{${a},${b},${c}} permimeter = ${a + b + c}`)

          if (periCount.length > maxCount) {
            result = a+b+c
            maxCount = periCount.length
            // console.log(periCount)
          }
        }
      }
    }
  }
  periCount = []

}

console.log(result)
// => 840
// +- 0.4 s


// Working on an other solution for hackerrank

// // https://en.wikipedia.org/wiki/Pythagorean_triple#Geometry_of_Euclid.27s_formula
// let limit = 500
// let allNums = []

// // p = "perimeter" starts at 12 because the first tripet is a = 3, b = 4, c = 5

// // m > n > 0

// function triangleFinder() {
//   for (let m = 2;; m++) {
//     for (let n = 1; n < m; n++) {
//       for (let k = 1; k < m; k++) {
//       if (k*limit > 5000000) break;
//       if (2*m*(m+n) > limit) {
//         return allNums.sort((a, b) => {
//           if (a[3] > b[3]) return 1
//           else if (a[3] < b[3]) return -1
//           else if (a[3] === b[3]) {
//             if (a[0] > b[0]) return 1
//             else if (a[0] < b[0]) return -1
//           }
//         })
//       }


//       let a = (m * m - n * n)
//       let b = (2 * m * n)
//       let c = (m * m + n * n)

//       if ((a*a)/(c*c)+(b*b)/(c*c) !== 1) continue;
//       allNums.push([a, b, c, a + b + c])
//     }
//   }
//   }
// }

// console.log(triangleFinder())