// Exercise 60
// https://projecteuler.net/problem=60

// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. 
// The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.
// Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

let primes = [2]
let test = true
for (let i = 3; i < 13; i++) {
    for (let j = 0; j < primes.length; j++) {
        
        console.log(test)
        if (i % primes[j] == 0) {
            console.log(`${i} ${j}`)
            test = false
            
        } 
    }
    
    if (test == true) {
        primes.push(i)
    } 
    test = true
    console.log(`primes = ${primes}`)
}

let a = 0
let b = 1
let c = 2
let d = 3
let e = 4

for (a = 0; a < b; a++) {
    for (b = 1; b < c; b++) {
        for (c = 2; c < d; c++) {
            for (d = 3; d < e; d++) {
                for (e = 4; e < 5; e++) {
                    console.log(primes[a])
                }
            }
        }
    }
}
