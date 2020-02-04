// Exercice 9
// https://projecteuler.net/problem=9
//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let desiredResult = 1000
let numA = 0;
let numB = 0;
let numC = 0;
let stressTest1 = false;
let stressTest2 = false;
let stressTest3 = false;

for (let numA = 1; numA < (desiredResult - 1); numA++) {
    for (let numB = 1; numB < (desiredResult - numA); numB++) {
        numC = desiredResult - numA - numB
        stressTest1 = false;
        stressTest2 = false;
        stressTest3 = false;
        aSquare = Math.pow(numA, 2);
        bSquare = Math.pow(numB, 2);
        cSquare = Math.pow(numC, 2);

        if ((numA + numB + numC) == desiredResult) {
            stressTest1 = true;
            if ((aSquare + bSquare) == cSquare) {
                stressTest2 = true;
                if (numA < numB && numA < numC && numB < numC) {
                    stressTest3 = true;
                    console.log(`First number ${numA}, second number ${numB}, Third number ${numC}`)
                    console.log(`the product is ${numA * numB * numC}`)
                }
            }
        }
    }
}
