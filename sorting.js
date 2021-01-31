function sortingMethod (array) {
  // this helper function will swap elements
  function swap (a, b) {
    let temp = sortedArray[a]
    sortedArray[a] = sortedArray[b]
    sortedArray[b] = temp
  }
  // let's make a copy of our original array
  let sortedArray = array.slice()

  //I will use the Bubble sort algorithm to check each element
  for (let a = 0; a < array.length - 1; a++){
    for (let b = a + 1; b < array.length; b++) {

      // I split each string - on the space caracter - in smaller substrings
      let arrayA = sortedArray[a].split(" "), wordsA = ""
      let arrayB = sortedArray[b].split(" "), wordsB = "" 

      // for each substring i want to see if it contains numbers
      for (let i = 0; i < arrayA.length; i++) {
        // if it does i want to add it to a string of words
        if(!/\d/.test(arrayA[i])) wordsA += arrayA[i] + " "
      }
  
      for (let i = 0; i < arrayB.length; i++) {
        if(!/\d/.test(arrayB[i])) wordsB += arrayB[i] + " "
      }
      
      // if there are no words in both strings, sort these strings
      if(wordsA === "" && wordsB === "") {
        if (sortedArray[a] > sortedArray[b]) swap(a, b)
      }

      // if string A contains no words but string B does, then swap no matter what.
      if(wordsA === "" && wordsB !== "") swap(a, b)

      // if both strings contains words, then compare the words strings 
      // to see if it needs sort or not
      if(wordsA !== "" && wordsB !== "") {
        // if the words are the same, sort the strings
        if(wordsA === wordsB) {
          if (sortedArray[a] > sortedArray[b]) swap(a, b)
        } else if (wordsA > wordsB) swap(a, b)
      }
    }
  }
  console.log(sortedArray)
}

sortingMethod ([
"dc5dwc wsdc2 6w5c cqd52 65q Dog jfhb54 Food",
"cwdq5 wd5 cd1 Swimming Gear",
"2sdfc 2cwd2 qw2dxc Baloons",
"d6wec2 65dwc56 62wd6c52 Birthday present for men",
"5c6d e65 wqe65 c5c1 3214 654 231 56",
"dw2qc1 32c1dqw 6d545 65 d5",
"65dqc4 65c4dwq 65d2 g65w4 u41y65 665 54+5",
"wdcwde25 wdsc65 qwc2 q2 3 Dog Brush",
"654rnt h65 46tr5 65h4 g2 2h1n 21 21"
])
