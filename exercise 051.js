// Exercise 51
// https://projecteuler.net/problem=51

// By replacing the 1st digit of the 2-digit number " *3 ", it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.
// By replacing the 3rd and 4th digits of " 56**3 " with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.
// Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.




// finding some prime numbers
let allPrimes = ['2']
let twoDigPrimes = []
let threeDigPrimes = []




let test;
let breakresult = false;
// let allTests = [];
let testK = []
let intersection


for (let i = 3; i < 1010; i++) {
    test = 1
    for (let j = 0; j < allPrimes.length; j++) {
        if (i % allPrimes[j] == 0) { break }
        if (j == (allPrimes.length - 1) && test == 1) {

            if (String(i).length == 1) {
                allPrimes.push(`${i}`);
                break;

            } else if (String(i).length == 2) {
                allPrimes.push(`${i}`);
                twoDigPrimes.push(`${i}`);
                break;

            } else if (String(i).length == 3) {
                for (let num = 0; num < twoDigPrimes.length; num++) {
                    intersection = [];
                    testK = [];
                    for (let k = 0; k < 10; k++) {
                        testK.push(`${k}${twoDigPrimes[num][1]}`)
                    }
                    
                    intersection = testK.filter(match => twoDigPrimes.includes(match));
                 

                    if (intersection.length > 6) {
                        // breakresult == true;
                        console.log(intersection)
                        // console.log(twoDigPrimes[num])
                    }

                    allPrimes.push(`${i}`);
                    threeDigPrimes.push(`${i}`);
                }
            } else if (String(i).length == 4) {
                    for (let num = 0; num < threeDigPrimes.length; num++){
                        intersection = [];
                        testK = [];
                            for (let k = 0; k < 10; k++){
                                testK.push(`${threeDigPrimes[num][1]}${k}${threeDigPrimes[num][2]}`)
                            }
                        
                        intersection = testK.filter(match => threeDigPrimes.includes(match));
                     
    
                        if (intersection.length > 5) {
                            // breakresult == true;
                            console.log(intersection)
                            // console.log(twoDigPrimes[num])
                            breakresult = true
                            break
                        }
                    
                }
                
                allPrimes.push(`${i}`);
                threeDigPrimes.push(`${i}`);
                break;
            }

        }
    }

    if (breakresult == true) { break }
}
// console.log(twoDigPrimes)
// console.log(threeDigPrimes)
