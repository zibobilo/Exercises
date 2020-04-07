// Problem 39
// https://projecteuler.net/problem=39
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
// {20,48,52}, {24,45,51}, {30,40,50}
// For which value of p ≤ 1000, is the number of solutions maximised?


// a2+b2 = c2   => Thanks Pythagore

let limit = 1001
let periCount = []
let maxCount = 0

for (i = 0; i < 1001; i++) {
    for (let a = 1; a < limit; a++) {
        for (let b = 1; b < limit - a; b++) {
            for (let c = 1; c < limit - a - b; c++) {
                if ((a * a) + (b * b) == (c * c)) {
                    if (a+b+c == i) {
                        periCount.push(`{${a},${b},${c}} permimeter = ${a + b + c}`)
                        if (periCount.length > maxCount) {
                            maxCount = periCount.length
                            console.log(periCount.length)
                            console.log(periCount)
                        }
                    }
                }
            }
        }
    }
    periCount = []
}

// This method takes 70 seconds to run, it can be faster by adding all perimeters - that match pythagore theorem - to an array and return the highest number of duplicates (to do)