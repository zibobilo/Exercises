// One, Two, Three
// Using all of the digits from 1 to 9 once each, create three 3-digit numbers that are in a ratio of 1:2:3. There are four solutions.
let numbers = []
for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
        if (![a].includes(b)) {
            for (let c = 1; c < 10; c++) {
                if (![a, b].includes(c)) {
                    for (let d = 1; d < 10; d++) {
                        if (![a, b, c].includes(d)) {
                            for (let e = 1; e < 10; e++) {
                                if (![a, b, c, d].includes(e)) {
                                    for (let f = 1; f < 10; f++) {
                                        if (![a, b, c, d, e].includes(f)) {
                                            for (let g = 1; g < 10; g++) {
                                                if (![a, b, c, d, e, f].includes(g)) {
                                                    for (let h = 1; h < 10; h++) {
                                                        if (![a, b, c, d, e, f, g].includes(h)) {
                                                            for (let i = 1; i < 10; i++) {
                                                                if (![a, b, c, d, e, f, g, h].includes(i)) {
                                                                    if (Number(`${a}${b}${c}`) * 3 == (Number(`${d}${e}${f}`) / 2) * 3 &&
                                                                        Number(`${a}${b}${c}`) * 3 == Number(`${g}${h}${i}`)) {
                                                                        
                                                                        numbers.push(`${Number(`${a}${b}${c}`)}:${Number(`${d}${e}${f}`)}:${Number(`${g}${h}${i}`)}`)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(numbers)

//  [ '192:384:576', '219:438:657', '273:546:819', '327:654:981' ]
