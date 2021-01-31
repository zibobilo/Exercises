// Exercise 52
// https://projecteuler.net/problem=52

// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

for (let i = 1; i < Infinity; i++) {
  let test = String(i)
  let test2 = String(i * 2)
  let test3 = String(i * 3)
  let test4 = String(i * 4)
  let test5 = String(i * 5)
  let test6 = String(i * 6)

  // Checking if x, 2x, 3x, 4x, 5x & 6x contains the same number of digits.
  if (test.length == test2.length && test3.length && test4.length && test5.length && test6.length) {
    let testa = [], testa2 = [], testa3 = [], testa4 = [], testa5 = [], testa6 = [], ho = []

    // I want to push each individual number (of all six multiplications) in an array to test them later one by one
    for (let l = 0; l < test.length; l++) {
      testa.push(test[l]), testa2.push(test2[l]), testa3.push(test3[l]), 
      testa4.push(test4[l]), testa5.push(test5[l]), testa6.push(test6[l])
    }

    // Testing numbers one by one for as long as there are numbers in the array, to see if they are all here.
    for (let l = 0; l < test.length; l++) {
      if (testa.includes(testa2[l]) && testa.includes(testa3[l]) &&
        testa.includes(testa4[l]) && testa.includes(testa5[l]) &&
        testa.includes(testa5[l]) && testa.includes(testa6[l])) {
        ho.push("")
      }
    }
    // If all numbers are here, ho.length will be the same as test.length
    if (ho.length == test.length) {
      console.log(test)
      break;
    }
  }
}
// => 142857

// +- 0.2 s