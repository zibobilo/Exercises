// Exercise 33
// https://projecteuler.net/problem=33
// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

let nonTrivial = []
let prodDen = 1
let prodNum = 1

for(den = 10 ; den < 100 ; den++){
    for (num = 10 ; num <= den ; num++){
        if(den!==num){
            if(String(den)[0] == String(num)[1] || String(den)[1] == String(num)[0]){
                if(Number(String(num)[0])/Number(String(den)[1]) == num/den){
                    nonTrivial.push(`${num}/${den} = ${Number(String(num)[0])}/${Number(String(den)[1])}`)
                    prodDen *= den
                    prodNum *= num

                } else if(Number(String(num)[1])/String(den)[0] == num/den){
                    nonTrivial.push(`${num}/${den} = ${Number(String(num)[1])}/${Number(String(den)[0])}`)
                    prodDen *= den
                    prodNum *= num

                }
            } 
        }         
    }
}

console.log(nonTrivial)
console.log(prodNum/prodDen)
