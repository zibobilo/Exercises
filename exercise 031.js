// ---------------------------------------------- Exercice 31
// https://projecteuler.net/problem=31
// In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

let limit = 200
let total = 0
let times = 0
let acent = 1
let bcent = 2
let ccent = 5
let dcent = 10
let ecent = 20
let fcent = 50
let gcent = 100
let hcent = 200

// count = 8 because all coins on their own can get to 2 pounds 1*200, 2*100,...2*1
let count = 8

let possibility = []

let possibilities = []

// possibility.push(`${times}x${a} + ${times}x${b} + ${times}x${c} + ${times}x${d} + ${times}x${e}`)
// possibilities.push(`2x${b}`)
// possibilities.push(`2x`)
// console.log(possibilities)

for (a = 0 ; a < 200 ; a++ ){
    for (b = 0 ; b < 100 ; b++ ){
        for (c = 0 ; c < 40 ; c++ ){
            for (d = 0 ; d < 20 ; d++ ){
                for (e = 0 ; e < 10 ; e++ ){
                    for (f = 0 ; f < 4 ; f++ ){
                        for (g = 0 ; g < 2 ; g++ ){
                            total = a*acent + b*bcent + c*ccent + d*dcent + e*ecent + f*fcent + g*gcent
                            if (total == 200){
                                count+=1
                                // possibility.push(`${a}*${acent} `)
                                // possibility.push(`${b}*${bcent} `)
                                // possibility.push(`${c}*${ccent} `)
                                // possibility.push(`${d}*${dcent} `)
                                // possibility.push(`${e}*${ecent} `)
                                // possibility.push(`${f}*${fcent} `)
                                // possibility.push(`${g}*${gcent} `)
                                // possibilities.push(possibility.join(''))
                                // possibility = []
                                total = 0
                            }
                        }
                    }
                }
            }
        }
    }
}

// console.log(possibilities)
// console.log(possibilities.length)

console.log(count)
