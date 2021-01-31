let arrayOfNumbers = []
function pathfinder(cols, rows){

    for(column = 0; column <= cols ; column++){
        for(row = 0; row <= rows; row++){

            if (column == 0 && row == 0){
                arrayOfNumbers[row].push(0n)
                // console.log(arrayOfNumbers)
                
            } else if (column == 0 || row == 0){
                arrayOfNumbers[row].push(1n)
                // console.log(arrayOfNumbers)

            } else if (column == 1 || row == 1){
                arrayOfNumbers[row].push(BigInt(column*row + 1))
                // console.log(arrayOfNumbers)

            } else {
                arrayOfNumbers.push(BigInt(arrayOfNumbers[arrayOfNumbers.length - 1]) +
                BigInt(arrayOfNumbers[i-1][arrayOfNumbers.length - 1]))
                // console.log(arrayOfNumbers)
            }
        }
    }
    console.log(arrayOfNumbers)
    return String(arrayOfNumbers[arrayOfNumbers.length - 1])
}

function processData(input) {

  input = input.split("\n")

  for (let i = 1; i < input.length; i++) {
    input[i] = input[i].split(" ").map(a => Number(a))
    // console.log(input)
    console.log(pathfinder(input[i][0],input[i][1]))
  }
  
} 

processData("1\n3 3")