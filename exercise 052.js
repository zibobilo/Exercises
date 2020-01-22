// Exercise 52
// https://projecteuler.net/problem=52

// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

let limit = 1000000
let test
let test2
let test3
let test4
let test5
let test6
let testa = []
let testa2 = []
let testa3 = []
let testa4 = []
let testa5 = []
let testa6 = []

for (i = 1 ; i < limit ; i++){
    if( String(i).length == String(i*6).length &&
        String(i).length == String(i*5).length &&
        String(i).length == String(i*4).length &&
        String(i).length == String(i*3).length &&
        String(i).length == String(i*2).length){
        test =  String(i)
        test2 = String(i*2)
        test3 = String(i*3)
        test4 = String(i*4)
        test5 = String(i*5)
        test6 = String(i*6)
    } 

    for (l = 0 ; l < test.length ; l++){
        testa.push(test[l])
        testa2.push(test2[l])
        testa3.push(test3[l])
        testa4.push(test4[l])
        testa5.push(test5[l])
        testa6.push(test6[l])   
    }
    let ho = []

    for (l = 0 ; l < test.length ; l++){
        if (testa.includes(testa2[l])){
            if (testa.includes(testa3[l])){
                if (testa.includes(testa4[l])){
                    if (testa.includes(testa5[l])){
                        if (testa.includes(testa5[l])){
                            if (testa.includes(testa6[l])){
                                ho.push("")
                            }
                        }
                    }
                }
            }
        }
    }

    if(ho.length == test.length){
        console.log(test)
    }
    testa = []
    testa2 = []
    testa3 = []
    testa4 = []
    testa5 = []
    testa6 = []
}
