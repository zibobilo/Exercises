// Exercice 6
// The sum of the squares of the first ten natural numbers is,
// 1e2 + 2e2 +...+ 10e2 = 385
// The square of the sum of the first ten natural numbers is,
// (1+2+...+10)2=552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


let numberOfItterrance = 100;
let resultA = 0;

for (let i = 1 ; i <= numberOfItterrance ; i++) {
    resultA += Math.pow(i, 2);
    // console.log(resultA);
}

let resultB = 0;

for (let j = 1 ; j<= numberOfItterrance; j++) {
    resultB += j;
    
    if(j == numberOfItterrance){
        resultB = Math.pow(resultB, 2);
        // console.log(resultB);
    }
}

console.log(`Hello here is the result: ${resultB - resultA}`)