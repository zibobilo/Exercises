// -----------------------------------------    Exercice 17
// https://projecteuler.net/problem=17
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.


//     From 1 to 999, the numbers   one to nine will be written       190 times each (one hundred*100 + one, twenty one...to 99 *9*10)
//     From 1 to 999, the numbers   ten to nineteen will be written   100 times
//     From 1 to 999, the numbers   twenty to ninety will be written  100 times each
//     From 1 to 999, the number    hundred will be written            900 times
//     From 1 to 999, the number    "and" will be written              890 times (900-10)
//     "One thousand" will be written once

let test = "threehundredandfortytwo"
let totalLetters = [];
let count = 0;
const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
    "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "onethousand", "and",]
for (h = 0; h < 10; h++) {
    for (t = 0; t < 21; t++) {
        if (t < 20) {
            if (h !== 0) {
                count += numbers[h].length
                count += numbers[28].length
                if (t !== 0) {
                    count += numbers[30].length
                }
            }
            count += numbers[t].length
        }

        if (t >= 20) {
            for (j = 20; j < 28; j++) {
                for (k = 0; k < 10; k++) {
                    if (h !== 0) {
                        count += numbers[h].length
                        count += numbers[28].length
                        if (t !== 0) {
                            count += numbers[30].length
                        }
                    }
                    count += numbers[j].length
                    count += numbers[k].length
                }
            }
        }
    }
}
count += numbers[29].length
console.log(count)
