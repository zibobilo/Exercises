function processData(input) {
  input = input.split(" ").map(inp => Number(inp))

  let nonTrivial = [], sumDen = 0, sumNum = 0, setden = 10, setnum = 10, setlimit = 100

  for (let i = 2; i < input[0]; i++) {
    setden *= 10; setnum *= 10; setlimit *= 10
  }

  function nonTrivialTest(num, den, pop) {
    if (num % 10 === 0 && den % 10 === 0) {
      num /= 10; den /= 10
      if (num % 10 === 0 && den % 10 === 0) {
        num /= 10; den /= 10
        if (num % 10 === 0 && den % 10 === 0) {
          num /= 10; den /= 10
          if (num % 10 === 0 && den % 10 === 0) {
            num /= 10; den /= 10
          }
        }
      }
    }

    if (pop == 1 && String(num).length == 2) {
      return (String(num)[1] == String(den)[0] && Number(String(num)[0]) / Number(String(den)[1]) == num / den) || 
             (String(num)[0] == String(den)[1] && Number(String(num)[1]) / Number(String(den)[0]) == num / den) ||
             (String(num)[0] == String(den)[0] && Number(String(num)[1]) / Number(String(den)[1]) == num / den) ||
             (String(num)[1] == String(den)[1] && Number(String(num)[0]) / Number(String(den)[0]) == num / den)
    }

  return false
  }

  for (let den = setden; den < setlimit; den++) {
    for (let num = setnum; num < den; num++) {
      if(nonTrivialTest(num, den, input[1])) {
        sumDen += den
        sumNum += num
        nonTrivial.push(`${num}/${den}`)
      }
    }
  }
  // console.log(nonTrivial)
  console.log(sumDen, sumNum)
} 

processData("4 1")