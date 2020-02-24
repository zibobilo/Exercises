// --------------------------------------- Exercice 23 _____________________ TO IMPROVE

function test(y){
    let testCount = 0
    for (let i=1; i<y; i++){    
        if(y % i == 0 ){
            testCount += i
        }
    }
    return testCount
}

function result(x){
    
    let totalCount = 0
    for (j = 1; j < x; j++){
        let count = 0
        for (let i=1; i<j; i++){
            if(j % i == 0){
                count += i

            }
        }
        if ( count > j && j/2 >= test(j/2)) {
        totalCount += count
        console.log("number // count test // Count")
        console.log(j + "        " + count + "         " + j/2 + "         " + test(j/2))
        console.log("")
        }
    
    }
    return `the result is : ${totalCount} ! Thats the end for today`
}

console.log(result(28124*2))

