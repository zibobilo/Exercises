// exercise 32
// https://projecteuler.net/problem=32
let sum = 0
let products = []

for (let a = 1; a < 10; a++) {
  for (let b = 1; b < 10; b++) {
    if (a != b) {
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
                                  if (Number(`${a}${b}`) * Number(`${c}${d}${e}`) == Number(`${f}${g}${h}${i}`)) {
                                    console.log(`${a}${b} * ${c}${d}${e} = ${f}${g}${h}${i}`)
                                    if (!products.includes(Number(`${f}${g}${h}${i}`))) {
                                      sum += Number(`${f}${g}${h}${i}`)
                                      products.push(Number(`${f}${g}${h}${i}`))
                                    }
                                  }

                                  if (Number(`${a}`) * Number(`${b}${c}${d}${e}`) == Number(`${f}${g}${h}${i}`)) {
                                    console.log(`${a} * ${b}${c}${d}${e} = ${f}${g}${h}${i}`)
                                    if (!products.includes(Number(`${f}${g}${h}${i}`))) {
                                      sum += Number(`${f}${g}${h}${i}`)
                                      products.push(Number(`${f}${g}${h}${i}`))
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
}

console.log(`And the total is ==>> ${sum}`)

// 12 * 483 = 5796
// 18 * 297 = 5346
// 27 * 198 = 5346
// 28 * 157 = 4396
// 39 * 186 = 7254
// 4 * 1738 = 6952
// 4 * 1963 = 7852
// 42 * 138 = 5796
// 48 * 159 = 7632
// And the total is ==>> 45228

// +- 0.5 s
