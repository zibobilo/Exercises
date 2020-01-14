// -------------------------------------------- Exercise 33

let nonTrivial = []
let prodDen = 1
let prodNum = 1

for(den = 10 ; den < 100 ; den++){
    for (num = 10 ; num <= den ; num++){
        if(den!==num){
            if(String(den)[0] == String(num)[1] || String(den)[1] == String(num)[0]){

                if(Number(String(num)[0])/Number(String(den)[1]) == num/den){

                    nonTrivial.push(`${num}/${den} = ${Number(String(num)[0])}/${Number(String(den)[1])}`)
                    prodDen *= den
                    prodNum *= num

                } else if(Number(String(num)[1])/String(den)[0] == num/den){

                    nonTrivial.push(`${num}/${den} = ${Number(String(num)[1])}/${Number(String(den)[0])}`)
                    prodDen *= den
                    prodNum *= num

                }
            } 
        }         
    }
}
console.log(nonTrivial)
console.log(prodNum/prodDen)