// Exercise 36
// https://projecteuler.net/problem=36

// The decimal number, 585 = 10010010012(binary), is palindromic in both bases.
// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
// (Please note that the palindromic number, in either base, may not include leading zeros.)



let totalPalindromes = 0
let sum = 0

function palindrome(number) {
    let splitString = String(number).split("").reverse().join("")
    if (splitString == number) {
        return true
    } else {
        return false
    }
}

for (let i = 0; i < 1000000; i++) {
    if (palindrome(i)) {
        if (palindrome((i).toString(2))) {
            totalPalindromes++
            console.log(`${totalPalindromes} // i : ${i} // Bin: ${(i).toString(2)}`)
            sum += i
        }
    }
}

console.log(`sum = ${sum}`)