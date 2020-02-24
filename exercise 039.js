// // exercise 39
// math.config({precision: 2000});



// // configure math.js to work with enough precision to do our calculation
// math.config({precision: 2000});

// // evaluate the factorial using a bignumber value
// var value = math.bignumber(500);
// var result = math.factorial(value);

// // output the results
// console.log(math.format(result, {notation: 'fixed'}));

// const { sqrt, config } = require('mathjs')

// config = {
//     epsilon: 1e-12,
//     matrix: 'Matrix',
//     number: 'number',
//     precision: 64,
//     predictable: false,
//     randomSeed: null
//   }

// console.log(sqrt(10).toString()) // 2i

// This example demonstrates how you could integrate support for BigInt
// in mathjs. It's just a proof of concept, for full support you will
// have to defined more functions and define conversions from and to
// other data types.

const { create, all, factory } = require('mathjs')
const math = create(all)

// we can also add conversions here from number or string to BigInt
// and vice versa using math.typed.addConversion(...)

// math.import([
//   factory('BigInt', ['typed'], function createBigInt ({ typed }) {
//     typed.addType({
//       name: 'BigInt',
//       test: (x) => typeof x === 'bigint' // eslint-disable-line
//     })

//     return BigInt // eslint-disable-line
//   }, { lazy: false }),

//   factory('bigint', ['typed', 'BigInt'], function createBigint ({ typed, BigInt }) {
//     return typed('bigint', {
//       'number | string ': (x) => BigInt(x) // eslint-disable-line
//     })
//   }),

//   factory('add', ['typed'], function createBigIntAdd ({ typed }) {
//     return typed('add', {
//       'BigInt, BigInt': (a, b) => a + b
//     })
//   }),

//   factory('pow', ['typed'], function createBigIntPow ({ typed }) {
//     return typed('pow', {
//       'BigInt, BigInt': (a, b) => a ** b
//     })
//   })
// ])

console.log(math.evaluate('4349 + 5249'))
// console.log(math.evaluate('bigint(4349) + bigint(5249)'))
// console.log(math.evaluate('bigint(4349) ^ bigint(5249)'))



let number = ""

for (let i = 1; i <= 150; i++) {
    number += math.pow(i, i);
    number += math.evaluate('bigint(4349) + bigint(5249)')
}

console.log(math.evaluate(number))