// --------------------------------- exercice 24
// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

function test(){
    let newArray = []
    let resultArray = []
    let limit = 9
    for(a = 0; a <= limit ; a++){
        for (b = 0; b <= limit ; b++){
            if (![a].includes(b)){
                for(c = 0; c <= limit ; c++){
                    if (![a,b].includes(c)){
                       for(d = 0 ; d <= limit ; d++){
                            if(![a,b,c].includes(d)){
                                for(e = 0 ; e <= limit ; e++){
                                    if(![a,b,c,d].includes(e)){
                                        for(f = 0 ; f <= limit ; f++){
                                            if(![a,b,c,d,e].includes(f)){
                                                for(g = 0 ; g <= limit ; g++){
                                                    if(![a,b,c,d,e,f].includes(g)){
                                                        for(h = 0 ; h <= limit ; h++){
                                                            if(![a,b,c,d,e,f,g].includes(h)){
                                                                for(i = 0 ; i <= limit ; i++){
                                                                    if(![a,b,c,d,e,f,g,h].includes(i)){
                                                                        for(j = 0 ; j <= limit ; j++){
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
                                                                                if (resultArray.length > 1000000){
                                                                                  return resultArray[999999]
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
    }
}
console.log(test())