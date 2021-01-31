// Exercice 9
// https://projecteuler.net/problem=9
//A Pythagorean triplet is a set of three natural bers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let n = 1000
let stressTest = false;
for (let a = Math.floor(n/3); a > 0; a--) {
    for (let b = a + 1;; b++) {
        let c = n - a - b
        if (c < b) { break }
        if (a + b + c == n) {
            if (a*a + b*b == c*c) {
                stressTest = true;
                console.log(a * b * c)
                break;
            }
        }
    }
    if(stressTest) { break }
}
if(!stressTest) { console.log(-1) }
