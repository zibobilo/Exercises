// Exercise 15
// https://projecteuler.net/problem=15
// Starting in the top left corner of a 2×2 grid, 
// and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.
// https://projecteuler.net/project/images/p015.png
// How many such routes are there through a 20×20 grid?

let arrayOfNumbers = []
function pathBuilder(cols, rows){
      for(column = 0; column <= cols ; column++){
          for(row = 0; row <= rows; row++){
  
              if (column == 0 && row == 0){
                  arrayOfNumbers.push(0n)
                  // console.log(arrayOfNumbers)
                  
              } else if (column == 0 || row == 0){
                  arrayOfNumbers.push(1n)
                  // console.log(arrayOfNumbers)
  
              } else if (column == 1 || row == 1){
                  arrayOfNumbers.push(BigInt(column*row + 1))
                  // console.log(arrayOfNumbers)
  
              } else {
                  arrayOfNumbers.push(BigInt(arrayOfNumbers[arrayOfNumbers.length - 1]) +
                  BigInt(arrayOfNumbers[arrayOfNumbers.length - rows - 1]))
                  // console.log(arrayOfNumbers)
              }
          }
      }
      return String(arrayOfNumbers[arrayOfNumbers.length - 1])
  }
  
  function processData(input) {
    input = input.split("\n")
    let m = 501
    let n = 501
    pathBuilder(m,n)
    // console.log(arrayOfNumbers)
    for (let i = 1; i < input.length; i++) {
      input[i] = input[i].split(" ").map(a => Number(a))
      // console.log(input)
    //   console.log(input)
      let resultIndex = input[i][0] * (m + 1) + input[i][1]

      console.log(arrayOfNumbers.length, input[i][0], input[i][1], resultIndex )
      
      console.log(String(arrayOfNumbers[resultIndex] % 1000000007n))
    }
  } 

  processData("1\n1 2\n1 3\n1 4\n2 2\n2 3\n2 4\n3 2\n3 4\n4 1\n4 2\n4 3\n4 4") 