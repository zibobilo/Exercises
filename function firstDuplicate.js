function firstDuplicate(a) {
    let count = 0
    let test = false
    let arr = a.slice().sort()
    let arrTest = []

    if (a.length == 1){return -1}

    // for (i = 1; i < a.length; i++){
    //     count ++;
    //     for (k = 0; k < count; k++){
    //         if (a[k] == a[i]){
    //             return a[k]
    //         }
    //     }
    // }

   
    console.log(`this is a :${a}`)
    console.log(`this is arr :${arr}`)
    
    for (i = 0; i < a.length - 1; i++) {
        if(arr[i] == arr[i + 1]) {
            let index = a.indexOf(arr[i])
            a[index] = 0
            console.log(a)

            arrTest.push(a.indexOf(arr[i+1]))
            
            test = true
            // console.log(arrTest)
        } 
    }
    if (test == true) {
        console.log(arrTest.sort())
        console.log(a[arrTest[0]])

        return a[arrTest[0]]
        }
    arrTest.sort()
        


    if (test == false){return -1}
}

firstDuplicate([2, 1, 3, 5, 3, 2])