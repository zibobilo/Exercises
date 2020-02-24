// ----------------------------------- exercice 25
// https://projecteuler.net/problem=25
// The Fibonacci sequence is defined by the recurrence relation:
// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:
// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.
// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?


let a = 1n
let b = 1n
let c = 0n
let count = 2

while (c.toString().length < 1000) {
    count += 1
    c = b + a;
    a = b;
    b = c;
}

console.log(count)
