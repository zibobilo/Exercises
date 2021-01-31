function sortingMethod(array) {
  //  Extract all words from strings => ["copy of normal strings 3156", "strings that only contains words"]
  array.map((string, i) => {
    array[i] = [string.split(' ')]

    let onlyWords = []

    // I split each string - on the space caracter - in smaller substrings
    for (let j = 0; j < array[i][0].length; j++) {
      // if it does, add it to a string of words
      if (!/\d/.test(array[i][0][j])) onlyWords.push(array[i][0][j])
    }
    array[i].push(onlyWords.join(' '))
    array[i][0] = array[i][0].join(' ')
  })

  // Now let's sort
  array.sort((a, b) => a[1] ? b[1] ? a[1] > b[1] ? 1 : -1 : -1 : b[1] ? 1 : a > b ? 1 : -1)

  // remove the extra infos
  console.log(array.map((strings, i) => array[i] = strings[0]))
}

sortingMethod([
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