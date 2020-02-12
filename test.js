let s = ""
function test(s) {
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length - 1; j++) {
            if (s[i] == s[j]) {
                // then there is a repetitive caracter at the index => i & j
                return `there is a repetitive caracter here at index ${i} & ${j}`;
                
            } else if (i == s.length - 2) {
                return "there is no double caracters here"
                
            }
        }
    }
}

console.log(test("abcdefgdefg"))