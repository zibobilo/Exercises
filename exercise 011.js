// Exercise 011


const sample = "08022297381500400075040507785212507791084949994017811857608717409843694804566200814931735579142993714067538830034913366552709523046011426924685601325671370236912231167151676389419236542240402866331380244732609903450244753353783684203517125032988128642367102638406759547066183864706726206802621220956394396308409166499421245558056673992697177878968314883489637221362309750076442045351400613397343133957817532822753167159403800462161409535692163905429635314755588824001754243629855786560048357189070544443744602158515417581980816805944769287392138652177704895540045208839735991607975732162626793327986688366887576220720346336746551232639353690442167338253911249472180846293240627636206936417230238834629969826759857404361620733529783190017431497148868116235705540170547183515469169233486143520189196748"
const numberRow = 20; 
const numberCol = 20; 
const numbersTogether = 2;
const suitNumbers = 4;

if(sample.length == (numberRow*numberCol*numbersTogether)){
    console.log("OK, Numbers match");
    console.log("----------");
}

let [seriesOf, testOne, testTwo, testDiagThree, testDiagFour, biggestValue]  = Array(6).fill(0); 
let testNumbers = [];
    
    // numbersTogether.push(numbersTogether[j + (j+1)]);
    // console.log(numbersTogether)

for (let i=0; i < suitNumbers*numbersTogether ; i++ ){
    testNumbers.push(sample[i]);
}
console.log(testNumbers);

testNumbers.concat[0, 1];
console.log(testNumbers);


// Which one have the greatest potential?
if(testOne < testTwo){
    biggestValue = testTwo
    if(testTwo < testDiagThree){
        biggestValue = testDiagThree
        if(testDiagThree < testDiagFour){
            biggestValue = testDiagFour
        }
    }
} else {
    biggestValue = testOne
}


// Results
console.log("The biggest value is " + biggestValue)
console.log("---------results--------")
console.log("left-right : " + testOne)
console.log("up-down : " + testTwo)
console.log("Diagonal up-left to down-right : " + testDiagThree)
console.log("Diagonal down-left to up-right : " + testDiagFour)


