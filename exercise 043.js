// Exercise 43
// https://projecteuler.net/problem=43

// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

let resultArray = []
let newArray = []
let result = 0

for(a = 0 ; a < 10 ; a++){
    for(b = 0 ; b < 10 ; b++){
        if(![a].includes(b)){
            for(c = 0 ; c < 10 ; c++){
                if(![a,b].includes(c)){
                    for(d = 0 ; d < 10 ; d++){
                        if(![a,b,c].includes(d)){
                            for(e = 0 ; e < 10 ; e++){
                                if(![a,b,c,d].includes(e)){
                                    for(f = 0 ; f < 10 ; f++){
                                        if(![a,b,c,d,e].includes(f)){
                                            for(g = 0 ; g < 10 ; g++){
                                                if(![a,b,c,d,e,f].includes(g)){
                                                    for(h = 0 ; h < 10 ; h++){
                                                        if(![a,b,c,d,e,f,g].includes(h)){
                                                            for(i = 0 ; i < 10 ; i++){
                                                                if(![a,b,c,d,e,f,g,h].includes(i)){
                                                                    for(j = 0 ; j < 10 ; j++){
                                                                        if(![a,b,c,d,e,f,g,h,i].includes(j)){
                                                                            newArray.push(a)
                                                                            newArray.push(b)
                                                                            newArray.push(c)
                                                                            newArray.push(d)
                                                                            newArray.push(e)
                                                                            newArray.push(f)
                                                                            newArray.push(g)
                                                                            newArray.push(h)
                                                                            newArray.push(i)
                                                                            newArray.push(j)
                                                                            resultArray.push(newArray.join(''))
                                                                            newArray = [];
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(resultArray.length)
for(i = 0 ; i < resultArray.length ; i++){

    if(Number(resultArray[i][1]+resultArray[i][2]+resultArray[i][3]) % 2 == 0){
        if(Number(resultArray[i][2]+resultArray[i][3]+resultArray[i][4]) % 3 == 0){
            if(Number(resultArray[i][3]+resultArray[i][4]+resultArray[i][5]) % 5 == 0){
                if(Number(resultArray[i][4]+resultArray[i][5]+resultArray[i][6]) % 7 == 0){
                    if(Number(resultArray[i][5]+resultArray[i][6]+resultArray[i][7]) % 11 == 0){
                        if(Number(resultArray[i][6]+resultArray[i][7]+resultArray[i][8]) % 13 == 0){
                            if(Number(resultArray[i][7]+resultArray[i][8]+resultArray[i][9]) % 17 == 0){
                                result += Number(resultArray[i])
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(result)