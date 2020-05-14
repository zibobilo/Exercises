// Problem 116 ____________ Still in Progress ___________________
// https://projecteuler.net/problem=116

// A row of five grey square tiles is to have a number of its tiles replaced with coloured oblong tiles chosen from red (length two), green (length three), or blue (length four).
// If red tiles are chosen there are exactly seven ways this can be done.
// https://projecteuler.net/project/images/p116_1.png
// If green tiles are chosen there are three ways.
// https://projecteuler.net/project/images/p116_2.png
// And if blue tiles are chosen there are two ways.
// https://projecteuler.net/project/images/p116_3.png
// Assuming that colours cannot be mixed there are 7 + 3 + 2 = 12 ways of replacing the grey tiles in a row measuring five units in length.
// How many different ways can the grey tiles in a row measuring fifty units in length be replaced if colours cannot be mixed and at least one coloured tile must be used?
// NOTE: This is related to Problem 117.

let colors = [2, 3, 4]
let box = 5
let simulation = []
let count = 0

for (let c = 0; c < colors.length; c++) {
    let restBox = box
    console.log("")
    for (let rgb = 0; rgb < box; rgb++) {
        // for (let n = 1; n <= (restBox/colors[c]-rgb); n++) {
        for (let b = 0; b < box; b++) {
            simulation.push("0")
        }

        if (c == 0) {
            if (restBox > colors[c] - 1) {
                simulation[rgb] = simulation[rgb].replace('0', 'RED')
                simulation[rgb + 1] = simulation[rgb + 1].replace('0', 'RED')
                console.log(simulation)
            }

        } else if (c == 1) {

            if (restBox > colors[c] - 1) {
                simulation[rgb] = simulation[rgb].replace('0', 'GREEN')
                simulation[rgb + 1] = simulation[rgb + 1].replace('0', 'GREEN')
                simulation[rgb + 2] = simulation[rgb + 2].replace('0', 'GREEN')
                console.log(simulation)

            }

        } else if (c == 2) {
            if (restBox > colors[c] - 1) {
                simulation[rgb] = simulation[rgb].replace('0', 'BLUE')
                simulation[rgb + 1] = simulation[rgb + 1].replace('0', 'BLUE')
                simulation[rgb + 2] = simulation[rgb + 2].replace('0', 'BLUE')
                simulation[rgb + 3] = simulation[rgb + 3].replace('0', 'BLUE')
                console.log(simulation)

            }
        }
        count++

        restBox--


        simulation = []
    }

}
count -= 3

console.log(count)

// let colors = [2, 3, 4]
// let box = 5
// let simulation = []
// let count = 0
// let restBox = box

// // for (let i=0;i<box;i++){
// //     restBox = box
// //     while (colors[0] <= restBox) {
// //         restBox -= 2
// //         count++
// //     }
// // }

// let testRed = (Math.pow(box/(colors[0]),2)) + (Math.pow(box/3,2)) 
// console.log(testRed)

// let testGreen = (Math.pow((box/colors[1]),2))
// console.log(testGreen)

// let testBlue = (Math.pow((box/colors[2]),2))
// console.log(testBlue)

// console.log(testBlue + testGreen + testRed)
