
function minNumberOfJumps(array) {
  if(array.length < 2) return 0

  let result = []

  for (let i = 0; i < array.length;) {

    let end = array[i] + i + 1

    result.push(array[i])
    console.log(result, result.length)
    let max = 0
    let temp = 0

    for (let j = i + 1; j < end; j++) {
      if (array[j] + j > max) {
        max = array[j] + j
        temp = j
      }
    }

    i += temp

    if (i >= array.length - 1) {
      console.log(result, result.length)
      return result.length
    }
  }
}




minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3])










































  // let end = array[0] // first number is the index of the maximum possibilities
  
  // let bestPath = [array[0]] // best path always start with the first element of array
  
	// let i = 0 // starting index of subarrays of possibilities
	
  // while (i < array.length) { // while i is smaller than the length of the array
    
	// 	let possibleSteps = array.slice(i, end)
  //   let max = i
  //   let maxI
    
	// 	for (let j = 0; j < possibleSteps.length; j++) {
	// 		if (possibleSteps[j] + j > max) {
  //       max = possibleSteps[j] + j
  //       maxI = j
	// 		}
  //   }

  //   bestPath.push(array[max])

  //   i += array[max]
  //   end = max + 1

  //   if (end >= array.length-1) {
	// 		console.log(bestPath);
	// 		return bestPath.length1
	// 	}
	// }




