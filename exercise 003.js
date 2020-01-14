// Exercice 3
// https://projecteuler.net/problem=3

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

let exercise = 600851475143;
for (i=2; i<10000; i++){
    if (exercise % i == 0){
        exercise = exercise/i;
        console.log(`Prime factor: ${i}`);
        console.log(`${exercise}`);
    }
}
