let grid = [[1,2,3,4,5,6,7,8,0],
            [4,5,6,7,8,0,1,2,3],
            [7,8,0,1,2,3,4,5,6],
            [2,3,4,5,6,7,8,0,1],
            [5,6,7,8,0,1,2,3,4],
            [8,0,1,2,3,4,5,6,7],
            [3,4,5,6,7,8,0,1,2],
            [6,7,8,0,1,2,3,4,5],
            [0,1,2,3,4,5,6,7,8]]

let testSet = [1,2,3,4,5,6,7,8,9]
let data = { 
  rows: {},
  cols: {},
  cubes: {}
}
let zeros = []
function findZeros () {
  //  Let's keep track of the possible numbers for each "0"
  let num = 9
  for (let i = 0; i < num; i++) {
    for (let j= 0; j < num; j++) {
      if (grid[i][j] === 0 ) {
        zeros.push([i, j])
        
      }
    }
  }
  console.log(zeros)
}
findZeros()

      