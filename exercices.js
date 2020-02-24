

// ---------------------------------------------- Exercise 18 ----------- TO ENHENCE ----------------
// let numbers = "759564174782183587102004824765190123750334880277730763679965042806167092414126568340807033414872334732371694295371446525439152975114701133287773177839681757917152381714914358502729486366046889536730731669874031046298272309709873933853600423"
// let allNumbers = []

// // Building two arrays of all numbers on extremes sides
// let arrayRight = []
// let arrayLeft = []

// let count = 0
// let resultNumbers = []

// for (i = 0 ; i <= 238 ; i += 2){
//     allNumbers.push(numbers[i] + numbers[i+1])
// }

// for (i = 0 ; i < 15 ; i++){
//     // console.log(allNumbers)
//     // Counting the sum on each extreme lines of the pyramid
//     let amountRight = 0
//     let amountLeft = 0
//     let rows = 15 - i
    
//     if (i == 0 ){
//         resultNumbers.push(allNumbers[0])
//         allNumbers.splice(0 , 1)

//     } else {
//         for (j = 0 ; j < rows ; j++){
//             if (j == 0){
//                 rightRowCount = 1
//                 leftRowCount = 0
//             } else {
//                 rightRowCount += j + 2
//                 leftRowCount += j + 1
//             }
//             // Adding exterme sides numbers in an array
//             arrayRight.push(allNumbers[rightRowCount])
//             arrayLeft.push(allNumbers[leftRowCount])

            

//             // Counting the sum of exterme sides numbers
//             amountRight += Number(allNumbers[rightRowCount])
//             amountLeft += Number(allNumbers[leftRowCount])
        
//             // console.log(`lets add this from the left side of the pyramid : ${allNumbers[leftRowCount]}`)
//             // console.log(`lets add this from the right side of the pyramid : ${allNumbers[rightRowCount]}`)
//         }
//         if(amountLeft > amountRight){
//             console.log(`${allNumbers[0]} ${amountLeft} vs. ${amountRight} ${allNumbers[1]}`)
//             resultNumbers.push(allNumbers[0])

//             // Rebuilding the pyramid (for the next steps), before each extremity get compared and to continue with one of them or not
//             for (s = rows ; s > 0 ; s--){
//                 if (s == rows){
//                     count = allNumbers.length - 1
//                 } else {
//                     count = count - s - 2
//                 }  
//                 allNumbers.splice(count , 1)
//             }

//             allNumbers.splice(0 , 1)

            

//         } else if(amountLeft < amountRight){
//             console.log(`${allNumbers[0]} ${amountLeft} vs. ${amountRight} ${allNumbers[1]}`)
//             resultNumbers.push(allNumbers[1])

//             // making the new right pyramid under selected number on right
//             for (s = rows ; s > 0 ; s--){
//                 if (s == 1){
//                     allNumbers.splice(0 , 1)

//                 } else if (s == rows){
//                     count = allNumbers.length - s - 1
//                     allNumbers.splice(count , 1)
//                 } else {
//                     count = count - s - 1
//                     allNumbers.splice(count , 1)
//                 }  
//             }
//             allNumbers.splice(0 , 1)
                
//         } else{
//             console.log("WOW there is more then one road!!" + amountRight + ' & ' + amountLeft)
//             resultNumbers.push(allNumbers[1])

//             // making the new right pyramid under selected number on right
//             for (s = rows ; s > 0 ; s--){
//                 if (s == 1){
//                     allNumbers.splice(0 , 1)

//                 } else if (s == rows){
//                     count = allNumbers.length - s - 1
//                     allNumbers.splice(count , 1)
//                 } else {
//                     count = count - s - 1x
//                     allNumbers.splice(count , 1)
//                 }  
//             }
//             allNumbers.splice(0 , 1)
//         }
//     }

// }
// console.log(resultNumbers)
// let total = 0
// for (i=0; i<(resultNumbers.length); i++){
//     total +=  Number(resultNumbers[i])
//     console.log(total)
// }

// var values = [
//     [75],
//     [95, 64],
//     [17, 47, 82],
//     [18, 35, 87, 10],
//     [20, 04, 82, 47, 65],
//     [19, 01, 23, 75, 03, 34],
//     [88, 02, 77, 73, 07, 63, 67],
//     [99, 65, 04, 28, 06, 16, 70, 92],
//     [41, 41, 26, 56, 83, 40, 80, 70, 33],
//     [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//     [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//     [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//     [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//     [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//     [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
// ]

// // process rows from second-to-last row to first row
// for (var row = values.length - 2; row >= 0; row--) {
//     for (var i = 0; i < values[row].length; i++) {
//         values[row][i] = values[row][i]
//             + Math.max(values[row + 1][i], values[row + 1][i + 1])
//     }
// }

// console.log("Maximum Path Sum is: " + values[0][0])



// ----------------------------------------- problem 15

// let arrayOfNumbers = []

// function pathfinder(cols, rows){
//     for(column = 0; column <= (cols) ; column++){
//         for(row = 0; row <= (rows); row++){

//             if (column == 0 && row == 0){
//                 arrayOfNumbers.push(0)
//                 // console.log(arrayOfNumbers)
                
//             } else if (column == 0 || row == 0){
//                 arrayOfNumbers.push(1)
//                 // console.log(arrayOfNumbers)

//             } else if (column == 1 || row == 1){
//                 arrayOfNumbers.push(column*row + 1)
//                 // console.log(arrayOfNumbers)

//             } else {
//                 arrayOfNumbers.push(arrayOfNumbers[arrayOfNumbers.length - 1] + arrayOfNumbers[arrayOfNumbers.length - rows - 1])
//                 // console.log(arrayOfNumbers)
//             }
//         }
//     }
//     return arrayOfNumbers[arrayOfNumbers.length - 1]
// }

// console.log(pathfinder(20,20))









/
// --------------------------------------------------Exercice 32

// --------------------------------------------------leet code longest substring to revise

// function lengthOfLongestSubstring(s) {
//     // console.log(s[0])
//     // console.log(s.length)
//     let count = 0
//     let bestCount = 0
//     let testCount = 0
//     let interval = 0

//     for(i = 0 ; i < s.length ; i++){
//         if (i == 0 || count == 0 && s[i] !== s[i-1]){
//             count ++
//             if(bestCount < count){
//                 bestCount = count;
//             }   
//         } else if (i == 1 && s[i] !== s[i-1] || count == 1 && s[i] !== s[i-1]){
//             count ++
//                 if(bestCount < count){
//                     bestCount = count;
//                     } 
//         } else if (i >= 2 && s[i] !== s[i-1]){
//                 for(j = interval ; j < i ; j++){
//                     if (s[i] !== s[j]){
//                         console.log(`this is the interval ${interval}`)
//                         console.log(`this is i ${i}`)
//                         console.log(`this is j ${j}`)
//                         testCount ++
//                         console.log(`this is the counttest ${testCount}`)
//                     }
//                 }
                
//                 if ( testCount == i-interval){
//                     count ++
//                     test = 0
//                     bestCount = count;
//                 } else {
//                     count = 1
//                     i = j + interval
//                     interval = i
                    
//                 }
//                 testCount = 0
//         } else{
//             count = 1
//             interval = i
//         }

//         console.log(`ok the count is ${count}`)
        
//     }
//     console.log(bestCount)
//     return bestCount
    
// }
// lengthOfLongestSubstring("dvdf")

