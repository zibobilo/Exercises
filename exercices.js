




// --------------------------------- Exercice 7

// let count = 2;
// let verifCount = 1;

//  for (let i = 4; count < 20; i++){
//     for (let j = 2 ; j < i ; j++){
//         if ( i % j !==  0 && i % 2 !== 0){
//             verifCount += 1 ;
//             console.log(verifCount);
//             if (verifCount == (i-2) ){
//                 count += 1 ;
//                 console.log(`prime number #${count} is ${i}`)
//                 verifCount = 0;
//             }
//         }
//      }
//  }

// __________________________________ enhance exercice 7

// function printPrime(value) {
//     let primes = [];
//     let count = 1;
//     for(let i = 2; i < value; i++) {
//         primes[i] = true;
        
//     }
//     let limit = Math.sqrt(value);
//     for(let i = 2; i < limit; i++) {
//         if(primes[i] === true) {
//             for(let j = i * i; j < value; j += i) {
//                 primes[j] = false;
//             }
//         }
//     }
//     for(let i = 2; i < value; i++) {
//         if(primes[i] === true) {
//             count += 1
//             if (count === 10001){
//             console.log(i + " " + primes[i] + "  # " + count);
            
//             }
//         }
//     }
// }
// printPrime(110000)



// ---------------------------------- Exercice 8

// let sampleNumbers = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"
// let numbersInSample = sampleNumbers.length;
// let adjacentNumbers = 13;
// let maxResult = 0;
// let potentialMaxNum = 0;
// let winnerNums = 0;

// for (let i = 0; i <= (numbersInSample - adjacentNumbers); i++){
//     let seriesOfNum = [];
//     for (let k = 0; k <= adjacentNumbers; k++ ){
//         seriesOfNum.push(sampleNumbers[i + k]);
//         if (seriesOfNum.length == adjacentNumbers){
//             potentialMaxNum = seriesOfNum.reduce( (a,b) => a * b );
//             if (maxResult < potentialMaxNum){
//                 winnerNums = seriesOfNum;
//                 maxResult = potentialMaxNum;
//             }
//         }
//     }    
// }
// console.log(`The array ${winnerNums} gives the maximum potential => ${maxResult}`);


// --------------------------------------- Exercice 10


// let primes = [];
// let count = 1;
// let stopProcess = 2000000; 
// let sum = 0;

// for(let i = 2; i < stopProcess; i++) {
//     primes[i] = true;
// }

// let limit = Math.sqrt(stopProcess);


// for(let i = 2; i < limit; i++) {
//     if(primes[i] === true) {
//         for( let j = i * i; j < stopProcess; j += i) { 
//             primes[j] = false;
//         }
//     }
// }

// for(let i = 2; i < stopProcess; i++) {
//     if(primes[i] === true) {
//         count += 1
//         sum += i
//     } 
// }
// console.log(sum)


// ----------------------------------------- Exercice 11

// let sample = "08022297381500400075040507785212507791084949994017811857608717409843694804566200814931735579142993714067538830034913366552709523046011426924685601325671370236912231167151676389419236542240402866331380244732609903450244753353783684203517125032988128642367102638406759547066183864706726206802621220956394396308409166499421245558056673992697177878968314883489637221362309750076442045351400613397343133957817532822753167159403800462161409535692163905429635314755588824001754243629855786560048357189070544443744602158515417581980816805944769287392138652177704895540045208839735991607975732162626793327986688366887576220720346336746551232639353690442167338253911249472180846293240627636206936417230238834629969826759857404361620733529783190017431497148868116235705540170547183515469169233486143520189196748"
// let numberRow = 20; let numberCol = 20; let numbersTogether = 2;
// let suitNumbers = 4;

// if(sample.length == (numberRow*numberCol*numbersTogether)){
//     console.log("OK, Numbers match");
//     console.log("----------");
// }

// let seriesOf = 0; let testOne = 0; let testTwo = 0; let testDiagThree = 0; let testDiagFour = 0;
// let biggestValue = 0;
// let testNumbers = [];
    
//     // numbersTogether.push(numbersTogether[j + (j+1)]);
//     // console.log(numbersTogether)

// for (let i=0; i < suitNumbers*numbersTogether ; i++ ){
//     testNumbers.push(sample[i]);
// }
// console.log(testNumbers);

// testNumbers.concat[0, 1];
// console.log(testNumbers);


// // Which one have the greatest potential?
// if(testOne < testTwo){
//     biggestValue = testTwo
//     if(testTwo < testDiagThree){
//         biggestValue = testDiagThree
//         if(testDiagThree < testDiagFour){
//             biggestValue = testDiagFour
//         }
//     }
// } else {
//     biggestValue = testOne
// }


// // Results
// console.log("The biggest value is " + biggestValue)
// console.log("---------results--------")
// console.log("left-right : " + testOne)
// console.log("up-down : " + testTwo)
// console.log("Diagonal up-left to down-right : " + testDiagThree)
// console.log("Diagonal down-left to up-right : " + testDiagFour)


// ---------------------------- Exercice 16


// let exemple = Math.pow(2, 50);
// let output = [];
// let result = 0;

// for ( i=1 ; i<20 ; i++ ){
//     exemple *= Math.pow(2, 50);
//     console.log(exemple)
// }

// exemple = exemple.toString().replace("e+301", "").replace(".", "");
// console.log(exemple.length)

// for (i=0; i < exemple.length; i++){
//     result += Number(exemple.charAt(i));
// }
// console.log(exemple);
// console.log(result);



// function solution(n){
//     if(n===0){
//         return 1
//     }
//     n=n-1;
//     let arr=[2];
//     let val;
//     let carry=0;
//     for (let i=1;i<=n;i++){
//         for(let j=arr.length-1;j>=0;j--){
//             val=arr[j]*2+carry;
//             if(j!==0){
//                 if(val>9){
//                 arr[j]=val%10;
//                     carry=1;
//                 } else if(val<=9){
//                     arr[j]=val;
//                     carry=0;
//                 }
//             } else if(j===0){
//                 if(val>9){
//                 arr[0]=val%10;
//                 arr.unshift(1);
//                 carry=0;
//                 } else{
//                 arr[0]=val;
//                 carry=0;
//                 }
//             }
//         }
//     }
// return arr.reduce((a,v)=>a+v,0)
// }

// console.log(solution(1000))
// const BigNumber = require('bignumber.js');
// var sum = 0;
// console.log(BigNumber);
// var num = isBigNumber(2**1000);


// for (var j = 0; j < num.toString().length; j++) {
//     sum += parseInt(num.toString().substr(j, 1));
// }

// console.log(sum);


// ------------------------------- Amazon interview

// function cellCompete(states, days){
//     let leftCell = 0;
//     let rightCell = 0;
    
//     for (j=1; j<=days; j++){

//         let result = [];       

//         for (i=0; i<8; i++){
//             leftCell = (states[i-1]);
//             rightCell = (states[i+1]);

//             if((i-1) == -1){
//                 leftCell = 0;
//             } else if ((i+1) == 8){
//                 rightCell = 0;
//             }
//             // console.log("left Cell = " + leftCell);
//             // console.log("states[i] = " + states[i]);
//             // console.log("Right Cell = " + rightCell);
           
//             if(leftCell == rightCell){
//                 result.push(0)
                
//             } else {
//                 result.push(1)
               
//             }
//         }
//         states = result;
//     }
//     return days + "   " + states;  
// }
// console.log(cellCompete([0, 1, 0, 1, 0, 0, 0, 0], 3));

//  Day 0                   0 1 0 1 0 0 0 0
// OUTPUT day 1 SHOULD BE : 1 0 0 0 1 0 0 0
// OUTPUT day 2 SHOULD BE : 0 1 0 1 0 1 0 0
// OUTPUT day 3 SHOULD BE : 1 0 0 0 0 0 1 0 


//  ---------------------------- exercice 13

// let exercice = [37107287533902102798797998220837590246510135740250,
//                 46376937677490009712648124896970078050417018260538,
//                 74324986199524741059474233309513058123726617309629,
//                 91942213363574161572522430563301811072406154908250,
//                 23067588207539346171171980310421047513778063246676,
//                 89261670696623633820136378418383684178734361726757,
//                 28112879812849979408065481931592621691275889832738,
//                 44274228917432520321923589422876796487670272189318,
//                 47451445736001306439091167216856844588711603153276,
//                 70386486105843025439939619828917593665686757934951,
//                 62176457141856560629502157223196586755079324193331,
//                 64906352462741904929101432445813822663347944758178,
//                 92575867718337217661963751590579239728245598838407,
//                 58203565325359399008402633568948830189458628227828,
//                 80181199384826282014278194139940567587151170094390,
//                 35398664372827112653829987240784473053190104293586,
//                 86515506006295864861532075273371959191420517255829,
//                 71693888707715466499115593487603532921714970056938,
//                 54370070576826684624621495650076471787294438377604,
//                 53282654108756828443191190634694037855217779295145,
//                 36123272525000296071075082563815656710885258350721,
//                 45876576172410976447339110607218265236877223636045,
//                 17423706905851860660448207621209813287860733969412,
//                 81142660418086830619328460811191061556940512689692,
//                 51934325451728388641918047049293215058642563049483,
//                 62467221648435076201727918039944693004732956340691,
//                 15732444386908125794514089057706229429197107928209,
//                 55037687525678773091862540744969844508330393682126,
//                 18336384825330154686196124348767681297534375946515,
//                 80386287592878490201521685554828717201219257766954,
//                 78182833757993103614740356856449095527097864797581,
//                 16726320100436897842553539920931837441497806860984,
//                 48403098129077791799088218795327364475675590848030,
//                 87086987551392711854517078544161852424320693150332,
//                 59959406895756536782107074926966537676326235447210,
//                 69793950679652694742597709739166693763042633987085,
//                 41052684708299085211399427365734116182760315001271,
//                 65378607361501080857009149939512557028198746004375,
//                 35829035317434717326932123578154982629742552737307,
//                 94953759765105305946966067683156574377167401875275,
//                 88902802571733229619176668713819931811048770190271,
//                 25267680276078003013678680992525463401061632866526,
//                 36270218540497705585629946580636237993140746255962,
//                 24074486908231174977792365466257246923322810917141,
//                 91430288197103288597806669760892938638285025333403,
//                 34413065578016127815921815005561868836468420090470,
//                 23053081172816430487623791969842487255036638784583,
//                 11487696932154902810424020138335124462181441773470,
//                 63783299490636259666498587618221225225512486764533,
//                 67720186971698544312419572409913959008952310058822,
//                 95548255300263520781532296796249481641953868218774,
//                 76085327132285723110424803456124867697064507995236,
//                 37774242535411291684276865538926205024910326572967,
//                 23701913275725675285653248258265463092207058596522,
//                 29798860272258331913126375147341994889534765745501,
//                 18495701454879288984856827726077713721403798879715,
//                 38298203783031473527721580348144513491373226651381,
//                 34829543829199918180278916522431027392251122869539,
//                 40957953066405232632538044100059654939159879593635,
//                 29746152185502371307642255121183693803580388584903,
//                 41698116222072977186158236678424689157993532961922,
//                 62467957194401269043877107275048102390895523597457,
//                 23189706772547915061505504953922979530901129967519,
//                 86188088225875314529584099251203829009407770775672,
//                 11306739708304724483816533873502340845647058077308,
//                 82959174767140363198008187129011875491310547126581,
//                 97623331044818386269515456334926366572897563400500,
//                 42846280183517070527831839425882145521227251250327,
//                 55121603546981200581762165212827652751691296897789,
//                 32238195734329339946437501907836945765883352399886,
//                 75506164965184775180738168837861091527357929701337,
//                 62177842752192623401942399639168044983993173312731,
//                 32924185707147349566916674687634660915035914677504,
//                 99518671430235219628894890102423325116913619626622,
//                 73267460800591547471830798392868535206946944540724,
//                 76841822524674417161514036427982273348055556214818,
//                 97142617910342598647204516893989422179826088076852,
//                 87783646182799346313767754307809363333018982642090,
//                 10848802521674670883215120185883543223812876952786,
//                 71329612474782464538636993009049310363619763878039,
//                 62184073572399794223406235393808339651327408011116,
//                 66627891981488087797941876876144230030984490851411,
//                 60661826293682836764744779239180335110989069790714,
//                 85786944089552990653640447425576083659976645795096,
//                 66024396409905389607120198219976047599490197230297,
//                 64913982680032973156037120041377903785566085089252,
//                 16730939319872750275468906903707539413042652315011,
//                 94809377245048795150954100921645863754710598436791,
//                 78639167021187492431995700641917969777599028300699,
//                 15368713711936614952811305876380278410754449733078,
//                 40789923115535562561142322423255033685442488917353,
//                 44889911501440648020369068063960672322193204149535,
//                 41503128880339536053299340368006977710650566631954,
//                 81234880673210146739058568557934581403627822703280,
//                 82616570773948327592232845941706525094512325230608,
//                 22918802058777319719839450180888072429661980811197,
//                 77158542502016545090413245809786882778948721859617,
//                 72107838435069186155435662884062257473692284509516,
//                 20849603980134001723930671666823555245252804609722,
//                 53503534226472524250874054075591789781264330331690]

// let result = 0;

// for (i=0; i<100; i++){
//     result += exercice[i]
//     console.log(exercice[i] + "  " + i)
// }

// console.log(result);

// ------------------------------- exercice 12

// let divCount = 0;
// let row = 0;
// let colNum = 0;
// let sumTriangle = 0;
// let reminder = 0;
// let maxcount = 0;


// for (let i=0; divCount = 16; i++){
//     divCount = 0;
//     colNum += 1;
//     row += 1;
//     sumTriangle += colNum;
//     for (let j=1; j <= sumTriangle; j++){
//         if (sumTriangle % j == 0) {
//             divCount += 1 ;
//         }
      
//     }
//     if (divCount > maxcount){
//         maxcount = divCount;
//         console.log(maxcount);
//         console.log( " " );
//         console.log("for a total of " + divCount + " possible divisions");
//         console.log( " " );
//         console.log( " " );
//         console.log( " " );
//         console.log(sumTriangle);
        
//     }
    
// }

// -----------------------------------------    Exercice 17
    // From 1 to 999, the numbers   one to nine will be written       190 times each (one hundred*100 + one, twenty one...to 99 *9*10)
    // From 1 to 999, the numbers   ten to nineteen will be written   100 times
    // From 1 to 999, the numbers   twenty to ninety will be written  100 times each
    // From 1 to 999, the number    hundred will be written            900 times
    // From 1 to 999, the number    "and" will be written              890 times (900-10)
    // "One thousand" will be written once

// let test = "threehundredandfortytwo"
// let totalLetters = [];
// let count = 0;
// const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
//                 "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen","seventeen","eighteen", "nineteen",
//                 "twenty", "thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred","onethousand","and",]
// for (h = 0 ; h < 10 ; h++){
//     for (t = 0 ; t < 21 ; t++){
//         if (t < 20){
//             if(h !== 0){
//                 count += numbers[h].length
//                 count += numbers[28].length
//                 if (t !== 0){
//                     count += numbers[30].length
//                 }
//             }
//             count += numbers[t].length
//         }
        
//         if ( t >= 20) {
//             for(j = 20 ; j < 28 ; j++){
//                 for (k = 0 ; k < 10 ; k++){
//                     if(h !== 0){
//                         count += numbers[h].length
//                         count += numbers[28].length
//                         if (t !== 0){
//                             count += numbers[30].length
//                         }
//                     }
//                     count += numbers[j].length
//                     count += numbers[k].length
//                 }
//             }
//         }
//     }
// } 
// count += numbers[29].length
// console.log(count)

// ---------------------------------------------- Exercise 18 ----------- TO ENHENCE ----------------
// let numbers = "759564174782183587102004824765190123750334880277730763679965042806167092414126568340807033414872334732371694295371446525439152975114701133287773177839681757917152381714914358502729486366046889536730731669874031046298272309709873933853600423"
// let allNumbers = []

// // Building two arrays of all numbers on extremes sides
// let arrayRight = []
// let arrayLeft = []

// let count = 0
// let resultNumbers = []

// for (i = 0 ; i <= 238 ; i += 2){
//     allNumbers.push(numbers[i] + numbers[i+1])
// }

// for (i = 0 ; i < 15 ; i++){
//     // console.log(allNumbers)
//     // Counting the sum on each extreme lines of the pyramid
//     let amountRight = 0
//     let amountLeft = 0
//     let rows = 15 - i
    
//     if (i == 0 ){
//         resultNumbers.push(allNumbers[0])
//         allNumbers.splice(0 , 1)

//     } else {
//         for (j = 0 ; j < rows ; j++){
//             if (j == 0){
//                 rightRowCount = 1
//                 leftRowCount = 0
//             } else {
//                 rightRowCount += j + 2
//                 leftRowCount += j + 1
//             }
//             // Adding exterme sides numbers in an array
//             arrayRight.push(allNumbers[rightRowCount])
//             arrayLeft.push(allNumbers[leftRowCount])

            

//             // Counting the sum of exterme sides numbers
//             amountRight += Number(allNumbers[rightRowCount])
//             amountLeft += Number(allNumbers[leftRowCount])
        
//             // console.log(`lets add this from the left side of the pyramid : ${allNumbers[leftRowCount]}`)
//             // console.log(`lets add this from the right side of the pyramid : ${allNumbers[rightRowCount]}`)
//         }
//         if(amountLeft > amountRight){
//             console.log(`${allNumbers[0]} ${amountLeft} vs. ${amountRight} ${allNumbers[1]}`)
//             resultNumbers.push(allNumbers[0])

//             // Rebuilding the pyramid (for the next steps), before each extremity get compared and to continue with one of them or not
//             for (s = rows ; s > 0 ; s--){
//                 if (s == rows){
//                     count = allNumbers.length - 1
//                 } else {
//                     count = count - s - 2
//                 }  
//                 allNumbers.splice(count , 1)
//             }

//             allNumbers.splice(0 , 1)

            

//         } else if(amountLeft < amountRight){
//             console.log(`${allNumbers[0]} ${amountLeft} vs. ${amountRight} ${allNumbers[1]}`)
//             resultNumbers.push(allNumbers[1])

//             // making the new right pyramid under selected number on right
//             for (s = rows ; s > 0 ; s--){
//                 if (s == 1){
//                     allNumbers.splice(0 , 1)

//                 } else if (s == rows){
//                     count = allNumbers.length - s - 1
//                     allNumbers.splice(count , 1)
//                 } else {
//                     count = count - s - 1
//                     allNumbers.splice(count , 1)
//                 }  
//             }
//             allNumbers.splice(0 , 1)
                
//         } else{
//             console.log("WOW there is more then one road!!" + amountRight + ' & ' + amountLeft)
//             resultNumbers.push(allNumbers[1])

//             // making the new right pyramid under selected number on right
//             for (s = rows ; s > 0 ; s--){
//                 if (s == 1){
//                     allNumbers.splice(0 , 1)

//                 } else if (s == rows){
//                     count = allNumbers.length - s - 1
//                     allNumbers.splice(count , 1)
//                 } else {
//                     count = count - s - 1x
//                     allNumbers.splice(count , 1)
//                 }  
//             }
//             allNumbers.splice(0 , 1)
//         }
//     }

// }
// console.log(resultNumbers)
// let total = 0
// for (i=0; i<(resultNumbers.length); i++){
//     total +=  Number(resultNumbers[i])
//     console.log(total)
// }

// var values = [
//     [75],
//     [95, 64],
//     [17, 47, 82],
//     [18, 35, 87, 10],
//     [20, 04, 82, 47, 65],
//     [19, 01, 23, 75, 03, 34],
//     [88, 02, 77, 73, 07, 63, 67],
//     [99, 65, 04, 28, 06, 16, 70, 92],
//     [41, 41, 26, 56, 83, 40, 80, 70, 33],
//     [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//     [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//     [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//     [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//     [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//     [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
// ]

// // process rows from second-to-last row to first row
// for (var row = values.length - 2; row >= 0; row--) {
//     for (var i = 0; i < values[row].length; i++) {
//         values[row][i] = values[row][i]
//             + Math.max(values[row + 1][i], values[row + 1][i + 1])
//     }
// }

// console.log("Maximum Path Sum is: " + values[0][0])

// ----------------------------------- problem 14

// let bestCount = 0
// let bestNumber = 0

// for (let tN = 2 ; tN < 1000000 ; tN++){
//     let count = 1
//     let testNumber = tN
//     bestNumber = tN

//         while (testNumber !== 1){
//             if(testNumber % 2 == 0){
//                 testNumber /= 2
//                 count += 1
                
//             } else {
//                 testNumber = testNumber*3 + 1
//                 count += 1   
//             } 
//         }

//         if (bestCount < count){
//             bestCount = count
//             console.log("best number is : " + bestNumber)
//             console.log("best count is : " + bestCount)
//         }
// }

// ----------------------------------------- problem 15

// let arrayOfNumbers = []

// function pathfinder(cols, rows){
//     for(column = 0; column <= (cols) ; column++){
//         for(row = 0; row <= (rows); row++){

//             if (column == 0 && row == 0){
//                 arrayOfNumbers.push(0)
//                 // console.log(arrayOfNumbers)
                
//             } else if (column == 0 || row == 0){
//                 arrayOfNumbers.push(1)
//                 // console.log(arrayOfNumbers)

//             } else if (column == 1 || row == 1){
//                 arrayOfNumbers.push(column*row + 1)
//                 // console.log(arrayOfNumbers)

//             } else {
//                 arrayOfNumbers.push(arrayOfNumbers[arrayOfNumbers.length - 1] + arrayOfNumbers[arrayOfNumbers.length - rows - 1])
//                 // console.log(arrayOfNumbers)
//             }
//         }
//     }
//     return arrayOfNumbers[arrayOfNumbers.length - 1]
// }

// console.log(pathfinder(20,20))


//--------------------------------- exercice 21

// function test(y){
//     let testCount = 0
//     for (let i=1; i<y; i++){    
//         if(y % i === 0){   
//             testCount += i
//         }
//     }
//     return testCount
// }

// function result(x){
    
//     let totalCount = 0
//     for (j = 1; j < x; j++){
//         let count = 0
//         for (let i=1; i<j; i++){
//             if(j % i === 0){
//                 count += i

//             }
//         }
//         if ( test(count) == j && test(count) !== count){
//         totalCount += count
//         console.log("number // count test // Count")
//         console.log(j + "         " + test(count) + "        " + count)
//         console.log("")
//         }
    
//     }
//     return `the result is : ${totalCount} ! Thats the end for today`
// }

// console.log(result(10000))


// --------------------------------------- Exercice 22

// let names = ["MARY","PATRICIA","LINDA","BARBARA","ELIZABETH","JENNIFER","MARIA","SUSAN","MARGARET","DOROTHY","LISA","NANCY","KAREN","BETTY","HELEN","SANDRA","DONNA","CAROL","RUTH","SHARON","MICHELLE","LAURA","SARAH","KIMBERLY","DEBORAH","JESSICA","SHIRLEY","CYNTHIA","ANGELA","MELISSA","BRENDA","AMY","ANNA","REBECCA","VIRGINIA","KATHLEEN","PAMELA","MARTHA","DEBRA","AMANDA","STEPHANIE","CAROLYN","CHRISTINE","MARIE","JANET","CATHERINE","FRANCES","ANN","JOYCE","DIANE","ALICE","JULIE","HEATHER","TERESA","DORIS","GLORIA","EVELYN","JEAN","CHERYL","MILDRED","KATHERINE","JOAN","ASHLEY","JUDITH","ROSE","JANICE","KELLY","NICOLE","JUDY","CHRISTINA","KATHY","THERESA","BEVERLY","DENISE","TAMMY","IRENE","JANE","LORI","RACHEL","MARILYN","ANDREA","KATHRYN","LOUISE","SARA","ANNE","JACQUELINE","WANDA","BONNIE","JULIA","RUBY","LOIS","TINA","PHYLLIS","NORMA","PAULA","DIANA","ANNIE","LILLIAN","EMILY","ROBIN","PEGGY","CRYSTAL","GLADYS","RITA","DAWN","CONNIE","FLORENCE","TRACY","EDNA","TIFFANY","CARMEN","ROSA","CINDY","GRACE","WENDY","VICTORIA","EDITH","KIM","SHERRY","SYLVIA","JOSEPHINE","THELMA","SHANNON","SHEILA","ETHEL","ELLEN","ELAINE","MARJORIE","CARRIE","CHARLOTTE","MONICA","ESTHER","PAULINE","EMMA","JUANITA","ANITA","RHONDA","HAZEL","AMBER","EVA","DEBBIE","APRIL","LESLIE","CLARA","LUCILLE","JAMIE","JOANNE","ELEANOR","VALERIE","DANIELLE","MEGAN","ALICIA","SUZANNE","MICHELE","GAIL","BERTHA","DARLENE","VERONICA","JILL","ERIN","GERALDINE","LAUREN","CATHY","JOANN","LORRAINE","LYNN","SALLY","REGINA","ERICA","BEATRICE","DOLORES","BERNICE","AUDREY","YVONNE","ANNETTE","JUNE","SAMANTHA","MARION","DANA","STACY","ANA","RENEE","IDA","VIVIAN","ROBERTA","HOLLY","BRITTANY","MELANIE","LORETTA","YOLANDA","JEANETTE","LAURIE","KATIE","KRISTEN","VANESSA","ALMA","SUE","ELSIE","BETH","JEANNE","VICKI","CARLA","TARA","ROSEMARY","EILEEN","TERRI","GERTRUDE","LUCY","TONYA","ELLA","STACEY","WILMA","GINA","KRISTIN","JESSIE","NATALIE","AGNES","VERA","WILLIE","CHARLENE","BESSIE","DELORES","MELINDA","PEARL","ARLENE","MAUREEN","COLLEEN","ALLISON","TAMARA","JOY","GEORGIA","CONSTANCE","LILLIE","CLAUDIA","JACKIE","MARCIA","TANYA","NELLIE","MINNIE","MARLENE","HEIDI","GLENDA","LYDIA","VIOLA","COURTNEY","MARIAN","STELLA","CAROLINE","DORA","JO","VICKIE","MATTIE","TERRY","MAXINE","IRMA","MABEL","MARSHA","MYRTLE","LENA","CHRISTY","DEANNA","PATSY","HILDA","GWENDOLYN","JENNIE","NORA","MARGIE","NINA","CASSANDRA","LEAH","PENNY","KAY","PRISCILLA","NAOMI","CAROLE","BRANDY","OLGA","BILLIE","DIANNE","TRACEY","LEONA","JENNY","FELICIA","SONIA","MIRIAM","VELMA","BECKY","BOBBIE","VIOLET","KRISTINA","TONI","MISTY","MAE","SHELLY","DAISY","RAMONA","SHERRI","ERIKA","KATRINA","CLAIRE","LINDSEY","LINDSAY","GENEVA","GUADALUPE","BELINDA","MARGARITA","SHERYL","CORA","FAYE","ADA","NATASHA","SABRINA","ISABEL","MARGUERITE","HATTIE","HARRIET","MOLLY","CECILIA","KRISTI","BRANDI","BLANCHE","SANDY","ROSIE","JOANNA","IRIS","EUNICE","ANGIE","INEZ","LYNDA","MADELINE","AMELIA","ALBERTA","GENEVIEVE","MONIQUE","JODI","JANIE","MAGGIE","KAYLA","SONYA","JAN","LEE","KRISTINE","CANDACE","FANNIE","MARYANN","OPAL","ALISON","YVETTE","MELODY","LUZ","SUSIE","OLIVIA","FLORA","SHELLEY","KRISTY","MAMIE","LULA","LOLA","VERNA","BEULAH","ANTOINETTE","CANDICE","JUANA","JEANNETTE","PAM","KELLI","HANNAH","WHITNEY","BRIDGET","KARLA","CELIA","LATOYA","PATTY","SHELIA","GAYLE","DELLA","VICKY","LYNNE","SHERI","MARIANNE","KARA","JACQUELYN","ERMA","BLANCA","MYRA","LETICIA","PAT","KRISTA","ROXANNE","ANGELICA","JOHNNIE","ROBYN","FRANCIS","ADRIENNE","ROSALIE","ALEXANDRA","BROOKE","BETHANY","SADIE","BERNADETTE","TRACI","JODY","KENDRA","JASMINE","NICHOLE","RACHAEL","CHELSEA","MABLE","ERNESTINE","MURIEL","MARCELLA","ELENA","KRYSTAL","ANGELINA","NADINE","KARI","ESTELLE","DIANNA","PAULETTE","LORA","MONA","DOREEN","ROSEMARIE","ANGEL","DESIREE","ANTONIA","HOPE","GINGER","JANIS","BETSY","CHRISTIE","FREDA","MERCEDES","MEREDITH","LYNETTE","TERI","CRISTINA","EULA","LEIGH","MEGHAN","SOPHIA","ELOISE","ROCHELLE","GRETCHEN","CECELIA","RAQUEL","HENRIETTA","ALYSSA","JANA","KELLEY","GWEN","KERRY","JENNA","TRICIA","LAVERNE","OLIVE","ALEXIS","TASHA","SILVIA","ELVIRA","CASEY","DELIA","SOPHIE","KATE","PATTI","LORENA","KELLIE","SONJA","LILA","LANA","DARLA","MAY","MINDY","ESSIE","MANDY","LORENE","ELSA","JOSEFINA","JEANNIE","MIRANDA","DIXIE","LUCIA","MARTA","FAITH","LELA","JOHANNA","SHARI","CAMILLE","TAMI","SHAWNA","ELISA","EBONY","MELBA","ORA","NETTIE","TABITHA","OLLIE","JAIME","WINIFRED","KRISTIE","MARINA","ALISHA","AIMEE","RENA","MYRNA","MARLA","TAMMIE","LATASHA","BONITA","PATRICE","RONDA","SHERRIE","ADDIE","FRANCINE","DELORIS","STACIE","ADRIANA","CHERI","SHELBY","ABIGAIL","CELESTE","JEWEL","CARA","ADELE","REBEKAH","LUCINDA","DORTHY","CHRIS","EFFIE","TRINA","REBA","SHAWN","SALLIE","AURORA","LENORA","ETTA","LOTTIE","KERRI","TRISHA","NIKKI","ESTELLA","FRANCISCA","JOSIE","TRACIE","MARISSA","KARIN","BRITTNEY","JANELLE","LOURDES","LAUREL","HELENE","FERN","ELVA","CORINNE","KELSEY","INA","BETTIE","ELISABETH","AIDA","CAITLIN","INGRID","IVA","EUGENIA","CHRISTA","GOLDIE","CASSIE","MAUDE","JENIFER","THERESE","FRANKIE","DENA","LORNA","JANETTE","LATONYA","CANDY","MORGAN","CONSUELO","TAMIKA","ROSETTA","DEBORA","CHERIE","POLLY","DINA","JEWELL","FAY","JILLIAN","DOROTHEA","NELL","TRUDY","ESPERANZA","PATRICA","KIMBERLEY","SHANNA","HELENA","CAROLINA","CLEO","STEFANIE","ROSARIO","OLA","JANINE","MOLLIE","LUPE","ALISA","LOU","MARIBEL","SUSANNE","BETTE","SUSANA","ELISE","CECILE","ISABELLE","LESLEY","JOCELYN","PAIGE","JONI","RACHELLE","LEOLA","DAPHNE","ALTA","ESTER","PETRA","GRACIELA","IMOGENE","JOLENE","KEISHA","LACEY","GLENNA","GABRIELA","KERI","URSULA","LIZZIE","KIRSTEN","SHANA","ADELINE","MAYRA","JAYNE","JACLYN","GRACIE","SONDRA","CARMELA","MARISA","ROSALIND","CHARITY","TONIA","BEATRIZ","MARISOL","CLARICE","JEANINE","SHEENA","ANGELINE","FRIEDA","LILY","ROBBIE","SHAUNA","MILLIE","CLAUDETTE","CATHLEEN","ANGELIA","GABRIELLE","AUTUMN","KATHARINE","SUMMER","JODIE","STACI","LEA","CHRISTI","JIMMIE","JUSTINE","ELMA","LUELLA","MARGRET","DOMINIQUE","SOCORRO","RENE","MARTINA","MARGO","MAVIS","CALLIE","BOBBI","MARITZA","LUCILE","LEANNE","JEANNINE","DEANA","AILEEN","LORIE","LADONNA","WILLA","MANUELA","GALE","SELMA","DOLLY","SYBIL","ABBY","LARA","DALE","IVY","DEE","WINNIE","MARCY","LUISA","JERI","MAGDALENA","OFELIA","MEAGAN","AUDRA","MATILDA","LEILA","CORNELIA","BIANCA","SIMONE","BETTYE","RANDI","VIRGIE","LATISHA","BARBRA","GEORGINA","ELIZA","LEANN","BRIDGETTE","RHODA","HALEY","ADELA","NOLA","BERNADINE","FLOSSIE","ILA","GRETA","RUTHIE","NELDA","MINERVA","LILLY","TERRIE","LETHA","HILARY","ESTELA","VALARIE","BRIANNA","ROSALYN","EARLINE","CATALINA","AVA","MIA","CLARISSA","LIDIA","CORRINE","ALEXANDRIA","CONCEPCION","TIA","SHARRON","RAE","DONA","ERICKA","JAMI","ELNORA","CHANDRA","LENORE","NEVA","MARYLOU","MELISA","TABATHA","SERENA","AVIS","ALLIE","SOFIA","JEANIE","ODESSA","NANNIE","HARRIETT","LORAINE","PENELOPE","MILAGROS","EMILIA","BENITA","ALLYSON","ASHLEE","TANIA","TOMMIE","ESMERALDA","KARINA","EVE","PEARLIE","ZELMA","MALINDA","NOREEN","TAMEKA","SAUNDRA","HILLARY","AMIE","ALTHEA","ROSALINDA","JORDAN","LILIA","ALANA","GAY","CLARE","ALEJANDRA","ELINOR","MICHAEL","LORRIE","JERRI","DARCY","EARNESTINE","CARMELLA","TAYLOR","NOEMI","MARCIE","LIZA","ANNABELLE","LOUISA","EARLENE","MALLORY","CARLENE","NITA","SELENA","TANISHA","KATY","JULIANNE","JOHN","LAKISHA","EDWINA","MARICELA","MARGERY","KENYA","DOLLIE","ROXIE","ROSLYN","KATHRINE","NANETTE","CHARMAINE","LAVONNE","ILENE","KRIS","TAMMI","SUZETTE","CORINE","KAYE","JERRY","MERLE","CHRYSTAL","LINA","DEANNE","LILIAN","JULIANA","ALINE","LUANN","KASEY","MARYANNE","EVANGELINE","COLETTE","MELVA","LAWANDA","YESENIA","NADIA","MADGE","KATHIE","EDDIE","OPHELIA","VALERIA","NONA","MITZI","MARI","GEORGETTE","CLAUDINE","FRAN","ALISSA","ROSEANN","LAKEISHA","SUSANNA","REVA","DEIDRE","CHASITY","SHEREE","CARLY","JAMES","ELVIA","ALYCE","DEIRDRE","GENA","BRIANA","ARACELI","KATELYN","ROSANNE","WENDI","TESSA","BERTA","MARVA","IMELDA","MARIETTA","MARCI","LEONOR","ARLINE","SASHA","MADELYN","JANNA","JULIETTE","DEENA","AURELIA","JOSEFA","AUGUSTA","LILIANA","YOUNG","CHRISTIAN","LESSIE","AMALIA","SAVANNAH","ANASTASIA","VILMA","NATALIA","ROSELLA","LYNNETTE","CORINA","ALFREDA","LEANNA","CAREY","AMPARO","COLEEN","TAMRA","AISHA","WILDA","KARYN","CHERRY","QUEEN","MAURA","MAI","EVANGELINA","ROSANNA","HALLIE","ERNA","ENID","MARIANA","LACY","JULIET","JACKLYN","FREIDA","MADELEINE","MARA","HESTER","CATHRYN","LELIA","CASANDRA","BRIDGETT","ANGELITA","JANNIE","DIONNE","ANNMARIE","KATINA","BERYL","PHOEBE","MILLICENT","KATHERYN","DIANN","CARISSA","MARYELLEN","LIZ","LAURI","HELGA","GILDA","ADRIAN","RHEA","MARQUITA","HOLLIE","TISHA","TAMERA","ANGELIQUE","FRANCESCA","BRITNEY","KAITLIN","LOLITA","FLORINE","ROWENA","REYNA","TWILA","FANNY","JANELL","INES","CONCETTA","BERTIE","ALBA","BRIGITTE","ALYSON","VONDA","PANSY","ELBA","NOELLE","LETITIA","KITTY","DEANN","BRANDIE","LOUELLA","LETA","FELECIA","SHARLENE","LESA","BEVERLEY","ROBERT","ISABELLA","HERMINIA","TERRA","CELINA","TORI","OCTAVIA","JADE","DENICE","GERMAINE","SIERRA","MICHELL","CORTNEY","NELLY","DORETHA","SYDNEY","DEIDRA","MONIKA","LASHONDA","JUDI","CHELSEY","ANTIONETTE","MARGOT","BOBBY","ADELAIDE","NAN","LEEANN","ELISHA","DESSIE","LIBBY","KATHI","GAYLA","LATANYA","MINA","MELLISA","KIMBERLEE","JASMIN","RENAE","ZELDA","ELDA","MA","JUSTINA","GUSSIE","EMILIE","CAMILLA","ABBIE","ROCIO","KAITLYN","JESSE","EDYTHE","ASHLEIGH","SELINA","LAKESHA","GERI","ALLENE","PAMALA","MICHAELA","DAYNA","CARYN","ROSALIA","SUN","JACQULINE","REBECA","MARYBETH","KRYSTLE","IOLA","DOTTIE","BENNIE","BELLE","AUBREY","GRISELDA","ERNESTINA","ELIDA","ADRIANNE","DEMETRIA","DELMA","CHONG","JAQUELINE","DESTINY","ARLEEN","VIRGINA","RETHA","FATIMA","TILLIE","ELEANORE","CARI","TREVA","BIRDIE","WILHELMINA","ROSALEE","MAURINE","LATRICE","YONG","JENA","TARYN","ELIA","DEBBY","MAUDIE","JEANNA","DELILAH","CATRINA","SHONDA","HORTENCIA","THEODORA","TERESITA","ROBBIN","DANETTE","MARYJANE","FREDDIE","DELPHINE","BRIANNE","NILDA","DANNA","CINDI","BESS","IONA","HANNA","ARIEL","WINONA","VIDA","ROSITA","MARIANNA","WILLIAM","RACHEAL","GUILLERMINA","ELOISA","CELESTINE","CAREN","MALISSA","LONA","CHANTEL","SHELLIE","MARISELA","LEORA","AGATHA","SOLEDAD","MIGDALIA","IVETTE","CHRISTEN","ATHENA","JANEL","CHLOE","VEDA","PATTIE","TESSIE","TERA","MARILYNN","LUCRETIA","KARRIE","DINAH","DANIELA","ALECIA","ADELINA","VERNICE","SHIELA","PORTIA","MERRY","LASHAWN","DEVON","DARA","TAWANA","OMA","VERDA","CHRISTIN","ALENE","ZELLA","SANDI","RAFAELA","MAYA","KIRA","CANDIDA","ALVINA","SUZAN","SHAYLA","LYN","LETTIE","ALVA","SAMATHA","ORALIA","MATILDE","MADONNA","LARISSA","VESTA","RENITA","INDIA","DELOIS","SHANDA","PHILLIS","LORRI","ERLINDA","CRUZ","CATHRINE","BARB","ZOE","ISABELL","IONE","GISELA","CHARLIE","VALENCIA","ROXANNA","MAYME","KISHA","ELLIE","MELLISSA","DORRIS","DALIA","BELLA","ANNETTA","ZOILA","RETA","REINA","LAURETTA","KYLIE","CHRISTAL","PILAR","CHARLA","ELISSA","TIFFANI","TANA","PAULINA","LEOTA","BREANNA","JAYME","CARMEL","VERNELL","TOMASA","MANDI","DOMINGA","SANTA","MELODIE","LURA","ALEXA","TAMELA","RYAN","MIRNA","KERRIE","VENUS","NOEL","FELICITA","CRISTY","CARMELITA","BERNIECE","ANNEMARIE","TIARA","ROSEANNE","MISSY","CORI","ROXANA","PRICILLA","KRISTAL","JUNG","ELYSE","HAYDEE","ALETHA","BETTINA","MARGE","GILLIAN","FILOMENA","CHARLES","ZENAIDA","HARRIETTE","CARIDAD","VADA","UNA","ARETHA","PEARLINE","MARJORY","MARCELA","FLOR","EVETTE","ELOUISE","ALINA","TRINIDAD","DAVID","DAMARIS","CATHARINE","CARROLL","BELVA","NAKIA","MARLENA","LUANNE","LORINE","KARON","DORENE","DANITA","BRENNA","TATIANA","SAMMIE","LOUANN","LOREN","JULIANNA","ANDRIA","PHILOMENA","LUCILA","LEONORA","DOVIE","ROMONA","MIMI","JACQUELIN","GAYE","TONJA","MISTI","JOE","GENE","CHASTITY","STACIA","ROXANN","MICAELA","NIKITA","MEI","VELDA","MARLYS","JOHNNA","AURA","LAVERN","IVONNE","HAYLEY","NICKI","MAJORIE","HERLINDA","GEORGE","ALPHA","YADIRA","PERLA","GREGORIA","DANIEL","ANTONETTE","SHELLI","MOZELLE","MARIAH","JOELLE","CORDELIA","JOSETTE","CHIQUITA","TRISTA","LOUIS","LAQUITA","GEORGIANA","CANDI","SHANON","LONNIE","HILDEGARD","CECIL","VALENTINA","STEPHANY","MAGDA","KAROL","GERRY","GABRIELLA","TIANA","ROMA","RICHELLE","RAY","PRINCESS","OLETA","JACQUE","IDELLA","ALAINA","SUZANNA","JOVITA","BLAIR","TOSHA","RAVEN","NEREIDA","MARLYN","KYLA","JOSEPH","DELFINA","TENA","STEPHENIE","SABINA","NATHALIE","MARCELLE","GERTIE","DARLEEN","THEA","SHARONDA","SHANTEL","BELEN","VENESSA","ROSALINA","ONA","GENOVEVA","COREY","CLEMENTINE","ROSALBA","RENATE","RENATA","MI","IVORY","GEORGIANNA","FLOY","DORCAS","ARIANA","TYRA","THEDA","MARIAM","JULI","JESICA","DONNIE","VIKKI","VERLA","ROSELYN","MELVINA","JANNETTE","GINNY","DEBRAH","CORRIE","ASIA","VIOLETA","MYRTIS","LATRICIA","COLLETTE","CHARLEEN","ANISSA","VIVIANA","TWYLA","PRECIOUS","NEDRA","LATONIA","LAN","HELLEN","FABIOLA","ANNAMARIE","ADELL","SHARYN","CHANTAL","NIKI","MAUD","LIZETTE","LINDY","KIA","KESHA","JEANA","DANELLE","CHARLINE","CHANEL","CARROL","VALORIE","LIA","DORTHA","CRISTAL","SUNNY","LEONE","LEILANI","GERRI","DEBI","ANDRA","KESHIA","IMA","EULALIA","EASTER","DULCE","NATIVIDAD","LINNIE","KAMI","GEORGIE","CATINA","BROOK","ALDA","WINNIFRED","SHARLA","RUTHANN","MEAGHAN","MAGDALENE","LISSETTE","ADELAIDA","VENITA","TRENA","SHIRLENE","SHAMEKA","ELIZEBETH","DIAN","SHANTA","MICKEY","LATOSHA","CARLOTTA","WINDY","SOON","ROSINA","MARIANN","LEISA","JONNIE","DAWNA","CATHIE","BILLY","ASTRID","SIDNEY","LAUREEN","JANEEN","HOLLI","FAWN","VICKEY","TERESSA","SHANTE","RUBYE","MARCELINA","CHANDA","CARY","TERESE","SCARLETT","MARTY","MARNIE","LULU","LISETTE","JENIFFER","ELENOR","DORINDA","DONITA","CARMAN","BERNITA","ALTAGRACIA","ALETA","ADRIANNA","ZORAIDA","RONNIE","NICOLA","LYNDSEY","KENDALL","JANINA","CHRISSY","AMI","STARLA","PHYLIS","PHUONG","KYRA","CHARISSE","BLANCH","SANJUANITA","RONA","NANCI","MARILEE","MARANDA","CORY","BRIGETTE","SANJUANA","MARITA","KASSANDRA","JOYCELYN","IRA","FELIPA","CHELSIE","BONNY","MIREYA","LORENZA","KYONG","ILEANA","CANDELARIA","TONY","TOBY","SHERIE","OK","MARK","LUCIE","LEATRICE","LAKESHIA","GERDA","EDIE","BAMBI","MARYLIN","LAVON","HORTENSE","GARNET","EVIE","TRESSA","SHAYNA","LAVINA","KYUNG","JEANETTA","SHERRILL","SHARA","PHYLISS","MITTIE","ANABEL","ALESIA","THUY","TAWANDA","RICHARD","JOANIE","TIFFANIE","LASHANDA","KARISSA","ENRIQUETA","DARIA","DANIELLA","CORINNA","ALANNA","ABBEY","ROXANE","ROSEANNA","MAGNOLIA","LIDA","KYLE","JOELLEN","ERA","CORAL","CARLEEN","TRESA","PEGGIE","NOVELLA","NILA","MAYBELLE","JENELLE","CARINA","NOVA","MELINA","MARQUERITE","MARGARETTE","JOSEPHINA","EVONNE","DEVIN","CINTHIA","ALBINA","TOYA","TAWNYA","SHERITA","SANTOS","MYRIAM","LIZABETH","LISE","KEELY","JENNI","GISELLE","CHERYLE","ARDITH","ARDIS","ALESHA","ADRIANE","SHAINA","LINNEA","KAROLYN","HONG","FLORIDA","FELISHA","DORI","DARCI","ARTIE","ARMIDA","ZOLA","XIOMARA","VERGIE","SHAMIKA","NENA","NANNETTE","MAXIE","LOVIE","JEANE","JAIMIE","INGE","FARRAH","ELAINA","CAITLYN","STARR","FELICITAS","CHERLY","CARYL","YOLONDA","YASMIN","TEENA","PRUDENCE","PENNIE","NYDIA","MACKENZIE","ORPHA","MARVEL","LIZBETH","LAURETTE","JERRIE","HERMELINDA","CAROLEE","TIERRA","MIRIAN","META","MELONY","KORI","JENNETTE","JAMILA","ENA","ANH","YOSHIKO","SUSANNAH","SALINA","RHIANNON","JOLEEN","CRISTINE","ASHTON","ARACELY","TOMEKA","SHALONDA","MARTI","LACIE","KALA","JADA","ILSE","HAILEY","BRITTANI","ZONA","SYBLE","SHERRYL","RANDY","NIDIA","MARLO","KANDICE","KANDI","DEB","DEAN","AMERICA","ALYCIA","TOMMY","RONNA","NORENE","MERCY","JOSE","INGEBORG","GIOVANNA","GEMMA","CHRISTEL","AUDRY","ZORA","VITA","VAN","TRISH","STEPHAINE","SHIRLEE","SHANIKA","MELONIE","MAZIE","JAZMIN","INGA","HOA","HETTIE","GERALYN","FONDA","ESTRELLA","ADELLA","SU","SARITA","RINA","MILISSA","MARIBETH","GOLDA","EVON","ETHELYN","ENEDINA","CHERISE","CHANA","VELVA","TAWANNA","SADE","MIRTA","LI","KARIE","JACINTA","ELNA","DAVINA","CIERRA","ASHLIE","ALBERTHA","TANESHA","STEPHANI","NELLE","MINDI","LU","LORINDA","LARUE","FLORENE","DEMETRA","DEDRA","CIARA","CHANTELLE","ASHLY","SUZY","ROSALVA","NOELIA","LYDA","LEATHA","KRYSTYNA","KRISTAN","KARRI","DARLINE","DARCIE","CINDA","CHEYENNE","CHERRIE","AWILDA","ALMEDA","ROLANDA","LANETTE","JERILYN","GISELE","EVALYN","CYNDI","CLETA","CARIN","ZINA","ZENA","VELIA","TANIKA","PAUL","CHARISSA","THOMAS","TALIA","MARGARETE","LAVONDA","KAYLEE","KATHLENE","JONNA","IRENA","ILONA","IDALIA","CANDIS","CANDANCE","BRANDEE","ANITRA","ALIDA","SIGRID","NICOLETTE","MARYJO","LINETTE","HEDWIG","CHRISTIANA","CASSIDY","ALEXIA","TRESSIE","MODESTA","LUPITA","LITA","GLADIS","EVELIA","DAVIDA","CHERRI","CECILY","ASHELY","ANNABEL","AGUSTINA","WANITA","SHIRLY","ROSAURA","HULDA","EUN","BAILEY","YETTA","VERONA","THOMASINA","SIBYL","SHANNAN","MECHELLE","LUE","LEANDRA","LANI","KYLEE","KANDY","JOLYNN","FERNE","EBONI","CORENE","ALYSIA","ZULA","NADA","MOIRA","LYNDSAY","LORRETTA","JUAN","JAMMIE","HORTENSIA","GAYNELL","CAMERON","ADRIA","VINA","VICENTA","TANGELA","STEPHINE","NORINE","NELLA","LIANA","LESLEE","KIMBERELY","ILIANA","GLORY","FELICA","EMOGENE","ELFRIEDE","EDEN","EARTHA","CARMA","BEA","OCIE","MARRY","LENNIE","KIARA","JACALYN","CARLOTA","ARIELLE","YU","STAR","OTILIA","KIRSTIN","KACEY","JOHNETTA","JOEY","JOETTA","JERALDINE","JAUNITA","ELANA","DORTHEA","CAMI","AMADA","ADELIA","VERNITA","TAMAR","SIOBHAN","RENEA","RASHIDA","OUIDA","ODELL","NILSA","MERYL","KRISTYN","JULIETA","DANICA","BREANNE","AUREA","ANGLEA","SHERRON","ODETTE","MALIA","LORELEI","LIN","LEESA","KENNA","KATHLYN","FIONA","CHARLETTE","SUZIE","SHANTELL","SABRA","RACQUEL","MYONG","MIRA","MARTINE","LUCIENNE","LAVADA","JULIANN","JOHNIE","ELVERA","DELPHIA","CLAIR","CHRISTIANE","CHAROLETTE","CARRI","AUGUSTINE","ASHA","ANGELLA","PAOLA","NINFA","LEDA","LAI","EDA","SUNSHINE","STEFANI","SHANELL","PALMA","MACHELLE","LISSA","KECIA","KATHRYNE","KARLENE","JULISSA","JETTIE","JENNIFFER","HUI","CORRINA","CHRISTOPHER","CAROLANN","ALENA","TESS","ROSARIA","MYRTICE","MARYLEE","LIANE","KENYATTA","JUDIE","JANEY","IN","ELMIRA","ELDORA","DENNA","CRISTI","CATHI","ZAIDA","VONNIE","VIVA","VERNIE","ROSALINE","MARIELA","LUCIANA","LESLI","KARAN","FELICE","DENEEN","ADINA","WYNONA","TARSHA","SHERON","SHASTA","SHANITA","SHANI","SHANDRA","RANDA","PINKIE","PARIS","NELIDA","MARILOU","LYLA","LAURENE","LACI","JOI","JANENE","DOROTHA","DANIELE","DANI","CAROLYNN","CARLYN","BERENICE","AYESHA","ANNELIESE","ALETHEA","THERSA","TAMIKO","RUFINA","OLIVA","MOZELL","MARYLYN","MADISON","KRISTIAN","KATHYRN","KASANDRA","KANDACE","JANAE","GABRIEL","DOMENICA","DEBBRA","DANNIELLE","CHUN","BUFFY","BARBIE","ARCELIA","AJA","ZENOBIA","SHAREN","SHAREE","PATRICK","PAGE","MY","LAVINIA","KUM","KACIE","JACKELINE","HUONG","FELISA","EMELIA","ELEANORA","CYTHIA","CRISTIN","CLYDE","CLARIBEL","CARON","ANASTACIA","ZULMA","ZANDRA","YOKO","TENISHA","SUSANN","SHERILYN","SHAY","SHAWANDA","SABINE","ROMANA","MATHILDA","LINSEY","KEIKO","JOANA","ISELA","GRETTA","GEORGETTA","EUGENIE","DUSTY","DESIRAE","DELORA","CORAZON","ANTONINA","ANIKA","WILLENE","TRACEE","TAMATHA","REGAN","NICHELLE","MICKIE","MAEGAN","LUANA","LANITA","KELSIE","EDELMIRA","BREE","AFTON","TEODORA","TAMIE","SHENA","MEG","LINH","KELI","KACI","DANYELLE","BRITT","ARLETTE","ALBERTINE","ADELLE","TIFFINY","STORMY","SIMONA","NUMBERS","NICOLASA","NICHOL","NIA","NAKISHA","MEE","MAIRA","LOREEN","KIZZY","JOHNNY","JAY","FALLON","CHRISTENE","BOBBYE","ANTHONY","YING","VINCENZA","TANJA","RUBIE","RONI","QUEENIE","MARGARETT","KIMBERLI","IRMGARD","IDELL","HILMA","EVELINA","ESTA","EMILEE","DENNISE","DANIA","CARL","CARIE","ANTONIO","WAI","SANG","RISA","RIKKI","PARTICIA","MUI","MASAKO","MARIO","LUVENIA","LOREE","LONI","LIEN","KEVIN","GIGI","FLORENCIA","DORIAN","DENITA","DALLAS","CHI","BILLYE","ALEXANDER","TOMIKA","SHARITA","RANA","NIKOLE","NEOMA","MARGARITE","MADALYN","LUCINA","LAILA","KALI","JENETTE","GABRIELE","EVELYNE","ELENORA","CLEMENTINA","ALEJANDRINA","ZULEMA","VIOLETTE","VANNESSA","THRESA","RETTA","PIA","PATIENCE","NOELLA","NICKIE","JONELL","DELTA","CHUNG","CHAYA","CAMELIA","BETHEL","ANYA","ANDREW","THANH","SUZANN","SPRING","SHU","MILA","LILLA","LAVERNA","KEESHA","KATTIE","GIA","GEORGENE","EVELINE","ESTELL","ELIZBETH","VIVIENNE","VALLIE","TRUDIE","STEPHANE","MICHEL","MAGALY","MADIE","KENYETTA","KARREN","JANETTA","HERMINE","HARMONY","DRUCILLA","DEBBI","CELESTINA","CANDIE","BRITNI","BECKIE","AMINA","ZITA","YUN","YOLANDE","VIVIEN","VERNETTA","TRUDI","SOMMER","PEARLE","PATRINA","OSSIE","NICOLLE","LOYCE","LETTY","LARISA","KATHARINA","JOSELYN","JONELLE","JENELL","IESHA","HEIDE","FLORINDA","FLORENTINA","FLO","ELODIA","DORINE","BRUNILDA","BRIGID","ASHLI","ARDELLA","TWANA","THU","TARAH","SUNG","SHEA","SHAVON","SHANE","SERINA","RAYNA","RAMONITA","NGA","MARGURITE","LUCRECIA","KOURTNEY","KATI","JESUS","JESENIA","DIAMOND","CRISTA","AYANA","ALICA","ALIA","VINNIE","SUELLEN","ROMELIA","RACHELL","PIPER","OLYMPIA","MICHIKO","KATHALEEN","JOLIE","JESSI","JANESSA","HANA","HA","ELEASE","CARLETTA","BRITANY","SHONA","SALOME","ROSAMOND","REGENA","RAINA","NGOC","NELIA","LOUVENIA","LESIA","LATRINA","LATICIA","LARHONDA","JINA","JACKI","HOLLIS","HOLLEY","EMMY","DEEANN","CORETTA","ARNETTA","VELVET","THALIA","SHANICE","NETA","MIKKI","MICKI","LONNA","LEANA","LASHUNDA","KILEY","JOYE","JACQULYN","IGNACIA","HYUN","HIROKO","HENRY","HENRIETTE","ELAYNE","DELINDA","DARNELL","DAHLIA","COREEN","CONSUELA","CONCHITA","CELINE","BABETTE","AYANNA","ANETTE","ALBERTINA","SKYE","SHAWNEE","SHANEKA","QUIANA","PAMELIA","MIN","MERRI","MERLENE","MARGIT","KIESHA","KIERA","KAYLENE","JODEE","JENISE","ERLENE","EMMIE","ELSE","DARYL","DALILA","DAISEY","CODY","CASIE","BELIA","BABARA","VERSIE","VANESA","SHELBA","SHAWNDA","SAM","NORMAN","NIKIA","NAOMA","MARNA","MARGERET","MADALINE","LAWANA","KINDRA","JUTTA","JAZMINE","JANETT","HANNELORE","GLENDORA","GERTRUD","GARNETT","FREEDA","FREDERICA","FLORANCE","FLAVIA","DENNIS","CARLINE","BEVERLEE","ANJANETTE","VALDA","TRINITY","TAMALA","STEVIE","SHONNA","SHA","SARINA","ONEIDA","MICAH","MERILYN","MARLEEN","LURLINE","LENNA","KATHERIN","JIN","JENI","HAE","GRACIA","GLADY","FARAH","ERIC","ENOLA","EMA","DOMINQUE","DEVONA","DELANA","CECILA","CAPRICE","ALYSHA","ALI","ALETHIA","VENA","THERESIA","TAWNY","SONG","SHAKIRA","SAMARA","SACHIKO","RACHELE","PAMELLA","NICKY","MARNI","MARIEL","MAREN","MALISA","LIGIA","LERA","LATORIA","LARAE","KIMBER","KATHERN","KAREY","JENNEFER","JANETH","HALINA","FREDIA","DELISA","DEBROAH","CIERA","CHIN","ANGELIKA","ANDREE","ALTHA","YEN","VIVAN","TERRESA","TANNA","SUK","SUDIE","SOO","SIGNE","SALENA","RONNI","REBBECCA","MYRTIE","MCKENZIE","MALIKA","MAIDA","LOAN","LEONARDA","KAYLEIGH","FRANCE","ETHYL","ELLYN","DAYLE","CAMMIE","BRITTNI","BIRGIT","AVELINA","ASUNCION","ARIANNA","AKIKO","VENICE","TYESHA","TONIE","TIESHA","TAKISHA","STEFFANIE","SINDY","SANTANA","MEGHANN","MANDA","MACIE","LADY","KELLYE","KELLEE","JOSLYN","JASON","INGER","INDIRA","GLINDA","GLENNIS","FERNANDA","FAUSTINA","ENEIDA","ELICIA","DOT","DIGNA","DELL","ARLETTA","ANDRE","WILLIA","TAMMARA","TABETHA","SHERRELL","SARI","REFUGIO","REBBECA","PAULETTA","NIEVES","NATOSHA","NAKITA","MAMMIE","KENISHA","KAZUKO","KASSIE","GARY","EARLEAN","DAPHINE","CORLISS","CLOTILDE","CAROLYNE","BERNETTA","AUGUSTINA","AUDREA","ANNIS","ANNABELL","YAN","TENNILLE","TAMICA","SELENE","SEAN","ROSANA","REGENIA","QIANA","MARKITA","MACY","LEEANNE","LAURINE","KYM","JESSENIA","JANITA","GEORGINE","GENIE","EMIKO","ELVIE","DEANDRA","DAGMAR","CORIE","COLLEN","CHERISH","ROMAINE","PORSHA","PEARLENE","MICHELINE","MERNA","MARGORIE","MARGARETTA","LORE","KENNETH","JENINE","HERMINA","FREDERICKA","ELKE","DRUSILLA","DORATHY","DIONE","DESIRE","CELENA","BRIGIDA","ANGELES","ALLEGRA","THEO","TAMEKIA","SYNTHIA","STEPHEN","SOOK","SLYVIA","ROSANN","REATHA","RAYE","MARQUETTA","MARGART","LING","LAYLA","KYMBERLY","KIANA","KAYLEEN","KATLYN","KARMEN","JOELLA","IRINA","EMELDA","ELENI","DETRA","CLEMMIE","CHERYLL","CHANTELL","CATHEY","ARNITA","ARLA","ANGLE","ANGELIC","ALYSE","ZOFIA","THOMASINE","TENNIE","SON","SHERLY","SHERLEY","SHARYL","REMEDIOS","PETRINA","NICKOLE","MYUNG","MYRLE","MOZELLA","LOUANNE","LISHA","LATIA","LANE","KRYSTA","JULIENNE","JOEL","JEANENE","JACQUALINE","ISAURA","GWENDA","EARLEEN","DONALD","CLEOPATRA","CARLIE","AUDIE","ANTONIETTA","ALISE","ALEX","VERDELL","VAL","TYLER","TOMOKO","THAO","TALISHA","STEVEN","SO","SHEMIKA","SHAUN","SCARLET","SAVANNA","SANTINA","ROSIA","RAEANN","ODILIA","NANA","MINNA","MAGAN","LYNELLE","LE","KARMA","JOEANN","IVANA","INELL","ILANA","HYE","HONEY","HEE","GUDRUN","FRANK","DREAMA","CRISSY","CHANTE","CARMELINA","ARVILLA","ARTHUR","ANNAMAE","ALVERA","ALEIDA","AARON","YEE","YANIRA","VANDA","TIANNA","TAM","STEFANIA","SHIRA","PERRY","NICOL","NANCIE","MONSERRATE","MINH","MELYNDA","MELANY","MATTHEW","LOVELLA","LAURE","KIRBY","KACY","JACQUELYNN","HYON","GERTHA","FRANCISCO","ELIANA","CHRISTENA","CHRISTEEN","CHARISE","CATERINA","CARLEY","CANDYCE","ARLENA","AMMIE","YANG","WILLETTE","VANITA","TUYET","TINY","SYREETA","SILVA","SCOTT","RONALD","PENNEY","NYLA","MICHAL","MAURICE","MARYAM","MARYA","MAGEN","LUDIE","LOMA","LIVIA","LANELL","KIMBERLIE","JULEE","DONETTA","DIEDRA","DENISHA","DEANE","DAWNE","CLARINE","CHERRYL","BRONWYN","BRANDON","ALLA","VALERY","TONDA","SUEANN","SORAYA","SHOSHANA","SHELA","SHARLEEN","SHANELLE","NERISSA","MICHEAL","MERIDITH","MELLIE","MAYE","MAPLE","MAGARET","LUIS","LILI","LEONILA","LEONIE","LEEANNA","LAVONIA","LAVERA","KRISTEL","KATHEY","KATHE","JUSTIN","JULIAN","JIMMY","JANN","ILDA","HILDRED","HILDEGARDE","GENIA","FUMIKO","EVELIN","ERMELINDA","ELLY","DUNG","DOLORIS","DIONNA","DANAE","BERNEICE","ANNICE","ALIX","VERENA","VERDIE","TRISTAN","SHAWNNA","SHAWANA","SHAUNNA","ROZELLA","RANDEE","RANAE","MILAGRO","LYNELL","LUISE","LOUIE","LOIDA","LISBETH","KARLEEN","JUNITA","JONA","ISIS","HYACINTH","HEDY","GWENN","ETHELENE","ERLINE","EDWARD","DONYA","DOMONIQUE","DELICIA","DANNETTE","CICELY","BRANDA","BLYTHE","BETHANN","ASHLYN","ANNALEE","ALLINE","YUKO","VELLA","TRANG","TOWANDA","TESHA","SHERLYN","NARCISA","MIGUELINA","MERI","MAYBELL","MARLANA","MARGUERITA","MADLYN","LUNA","LORY","LORIANN","LIBERTY","LEONORE","LEIGHANN","LAURICE","LATESHA","LARONDA","KATRICE","KASIE","KARL","KALEY","JADWIGA","GLENNIE","GEARLDINE","FRANCINA","EPIFANIA","DYAN","DORIE","DIEDRE","DENESE","DEMETRICE","DELENA","DARBY","CRISTIE","CLEORA","CATARINA","CARISA","BERNIE","BARBERA","ALMETA","TRULA","TEREASA","SOLANGE","SHEILAH","SHAVONNE","SANORA","ROCHELL","MATHILDE","MARGARETA","MAIA","LYNSEY","LAWANNA","LAUNA","KENA","KEENA","KATIA","JAMEY","GLYNDA","GAYLENE","ELVINA","ELANOR","DANUTA","DANIKA","CRISTEN","CORDIE","COLETTA","CLARITA","CARMON","BRYNN","AZUCENA","AUNDREA","ANGELE","YI","WALTER","VERLIE","VERLENE","TAMESHA","SILVANA","SEBRINA","SAMIRA","REDA","RAYLENE","PENNI","PANDORA","NORAH","NOMA","MIREILLE","MELISSIA","MARYALICE","LARAINE","KIMBERY","KARYL","KARINE","KAM","JOLANDA","JOHANA","JESUSA","JALEESA","JAE","JACQUELYNE","IRISH","ILUMINADA","HILARIA","HANH","GENNIE","FRANCIE","FLORETTA","EXIE","EDDA","DREMA","DELPHA","BEV","BARBAR","ASSUNTA","ARDELL","ANNALISA","ALISIA","YUKIKO","YOLANDO","WONDA","WEI","WALTRAUD","VETA","TEQUILA","TEMEKA","TAMEIKA","SHIRLEEN","SHENITA","PIEDAD","OZELLA","MIRTHA","MARILU","KIMIKO","JULIANE","JENICE","JEN","JANAY","JACQUILINE","HILDE","FE","FAE","EVAN","EUGENE","ELOIS","ECHO","DEVORAH","CHAU","BRINDA","BETSEY","ARMINDA","ARACELIS","APRYL","ANNETT","ALISHIA","VEOLA","USHA","TOSHIKO","THEOLA","TASHIA","TALITHA","SHERY","RUDY","RENETTA","REIKO","RASHEEDA","OMEGA","OBDULIA","MIKA","MELAINE","MEGGAN","MARTIN","MARLEN","MARGET","MARCELINE","MANA","MAGDALEN","LIBRADA","LEZLIE","LEXIE","LATASHIA","LASANDRA","KELLE","ISIDRA","ISA","INOCENCIA","GWYN","FRANCOISE","ERMINIA","ERINN","DIMPLE","DEVORA","CRISELDA","ARMANDA","ARIE","ARIANE","ANGELO","ANGELENA","ALLEN","ALIZA","ADRIENE","ADALINE","XOCHITL","TWANNA","TRAN","TOMIKO","TAMISHA","TAISHA","SUSY","SIU","RUTHA","ROXY","RHONA","RAYMOND","OTHA","NORIKO","NATASHIA","MERRIE","MELVIN","MARINDA","MARIKO","MARGERT","LORIS","LIZZETTE","LEISHA","KAILA","KA","JOANNIE","JERRICA","JENE","JANNET","JANEE","JACINDA","HERTA","ELENORE","DORETTA","DELAINE","DANIELL","CLAUDIE","CHINA","BRITTA","APOLONIA","AMBERLY","ALEASE","YURI","YUK","WEN","WANETA","UTE","TOMI","SHARRI","SANDIE","ROSELLE","REYNALDA","RAGUEL","PHYLICIA","PATRIA","OLIMPIA","ODELIA","MITZIE","MITCHELL","MISS","MINDA","MIGNON","MICA","MENDY","MARIVEL","MAILE","LYNETTA","LAVETTE","LAURYN","LATRISHA","LAKIESHA","KIERSTEN","KARY","JOSPHINE","JOLYN","JETTA","JANISE","JACQUIE","IVELISSE","GLYNIS","GIANNA","GAYNELLE","EMERALD","DEMETRIUS","DANYELL","DANILLE","DACIA","CORALEE","CHER","CEOLA","BRETT","BELL","ARIANNE","ALESHIA","YUNG","WILLIEMAE","TROY","TRINH","THORA","TAI","SVETLANA","SHERIKA","SHEMEKA","SHAUNDA","ROSELINE","RICKI","MELDA","MALLIE","LAVONNA","LATINA","LARRY","LAQUANDA","LALA","LACHELLE","KLARA","KANDIS","JOHNA","JEANMARIE","JAYE","HANG","GRAYCE","GERTUDE","EMERITA","EBONIE","CLORINDA","CHING","CHERY","CAROLA","BREANN","BLOSSOM","BERNARDINE","BECKI","ARLETHA","ARGELIA","ARA","ALITA","YULANDA","YON","YESSENIA","TOBI","TASIA","SYLVIE","SHIRL","SHIRELY","SHERIDAN","SHELLA","SHANTELLE","SACHA","ROYCE","REBECKA","REAGAN","PROVIDENCIA","PAULENE","MISHA","MIKI","MARLINE","MARICA","LORITA","LATOYIA","LASONYA","KERSTIN","KENDA","KEITHA","KATHRIN","JAYMIE","JACK","GRICELDA","GINETTE","ERYN","ELINA","ELFRIEDA","DANYEL","CHEREE","CHANELLE","BARRIE","AVERY","AURORE","ANNAMARIA","ALLEEN","AILENE","AIDE","YASMINE","VASHTI","VALENTINE","TREASA","TORY","TIFFANEY","SHERYLL","SHARIE","SHANAE","SAU","RAISA","PA","NEDA","MITSUKO","MIRELLA","MILDA","MARYANNA","MARAGRET","MABELLE","LUETTA","LORINA","LETISHA","LATARSHA","LANELLE","LAJUANA","KRISSY","KARLY","KARENA","JON","JESSIKA","JERICA","JEANELLE","JANUARY","JALISA","JACELYN","IZOLA","IVEY","GREGORY","EUNA","ETHA","DREW","DOMITILA","DOMINICA","DAINA","CREOLA","CARLI","CAMIE","BUNNY","BRITTNY","ASHANTI","ANISHA","ALEEN","ADAH","YASUKO","WINTER","VIKI","VALRIE","TONA","TINISHA","THI","TERISA","TATUM","TANEKA","SIMONNE","SHALANDA","SERITA","RESSIE","REFUGIA","PAZ","OLENE","NA","MERRILL","MARGHERITA","MANDIE","MAN","MAIRE","LYNDIA","LUCI","LORRIANE","LORETA","LEONIA","LAVONA","LASHAWNDA","LAKIA","KYOKO","KRYSTINA","KRYSTEN","KENIA","KELSI","JUDE","JEANICE","ISOBEL","GEORGIANN","GENNY","FELICIDAD","EILENE","DEON","DELOISE","DEEDEE","DANNIE","CONCEPTION","CLORA","CHERILYN","CHANG","CALANDRA","BERRY","ARMANDINA","ANISA","ULA","TIMOTHY","TIERA","THERESSA","STEPHANIA","SIMA","SHYLA","SHONTA","SHERA","SHAQUITA","SHALA","SAMMY","ROSSANA","NOHEMI","NERY","MORIAH","MELITA","MELIDA","MELANI","MARYLYNN","MARISHA","MARIETTE","MALORIE","MADELENE","LUDIVINA","LORIA","LORETTE","LORALEE","LIANNE","LEON","LAVENIA","LAURINDA","LASHON","KIT","KIMI","KEILA","KATELYNN","KAI","JONE","JOANE","JI","JAYNA","JANELLA","JA","HUE","HERTHA","FRANCENE","ELINORE","DESPINA","DELSIE","DEEDRA","CLEMENCIA","CARRY","CAROLIN","CARLOS","BULAH","BRITTANIE","BOK","BLONDELL","BIBI","BEAULAH","BEATA","ANNITA","AGRIPINA","VIRGEN","VALENE","UN","TWANDA","TOMMYE","TOI","TARRA","TARI","TAMMERA","SHAKIA","SADYE","RUTHANNE","ROCHEL","RIVKA","PURA","NENITA","NATISHA","MING","MERRILEE","MELODEE","MARVIS","LUCILLA","LEENA","LAVETA","LARITA","LANIE","KEREN","ILEEN","GEORGEANN","GENNA","GENESIS","FRIDA","EWA","EUFEMIA","EMELY","ELA","EDYTH","DEONNA","DEADRA","DARLENA","CHANELL","CHAN","CATHERN","CASSONDRA","CASSAUNDRA","BERNARDA","BERNA","ARLINDA","ANAMARIA","ALBERT","WESLEY","VERTIE","VALERI","TORRI","TATYANA","STASIA","SHERISE","SHERILL","SEASON","SCOTTIE","SANDA","RUTHE","ROSY","ROBERTO","ROBBI","RANEE","QUYEN","PEARLY","PALMIRA","ONITA","NISHA","NIESHA","NIDA","NEVADA","NAM","MERLYN","MAYOLA","MARYLOUISE","MARYLAND","MARX","MARTH","MARGENE","MADELAINE","LONDA","LEONTINE","LEOMA","LEIA","LAWRENCE","LAURALEE","LANORA","LAKITA","KIYOKO","KETURAH","KATELIN","KAREEN","JONIE","JOHNETTE","JENEE","JEANETT","IZETTA","HIEDI","HEIKE","HASSIE","HAROLD","GIUSEPPINA","GEORGANN","FIDELA","FERNANDE","ELWANDA","ELLAMAE","ELIZ","DUSTI","DOTTY","CYNDY","CORALIE","CELESTA","ARGENTINA","ALVERTA","XENIA","WAVA","VANETTA","TORRIE","TASHINA","TANDY","TAMBRA","TAMA","STEPANIE","SHILA","SHAUNTA","SHARAN","SHANIQUA","SHAE","SETSUKO","SERAFINA","SANDEE","ROSAMARIA","PRISCILA","OLINDA","NADENE","MUOI","MICHELINA","MERCEDEZ","MARYROSE","MARIN","MARCENE","MAO","MAGALI","MAFALDA","LOGAN","LINN","LANNIE","KAYCE","KAROLINE","KAMILAH","KAMALA","JUSTA","JOLINE","JENNINE","JACQUETTA","IRAIDA","GERALD","GEORGEANNA","FRANCHESCA","FAIRY","EMELINE","ELANE","EHTEL","EARLIE","DULCIE","DALENE","CRIS","CLASSIE","CHERE","CHARIS","CAROYLN","CARMINA","CARITA","BRIAN","BETHANIE","AYAKO","ARICA","AN","ALYSA","ALESSANDRA","AKILAH","ADRIEN","ZETTA","YOULANDA","YELENA","YAHAIRA","XUAN","WENDOLYN","VICTOR","TIJUANA","TERRELL","TERINA","TERESIA","SUZI","SUNDAY","SHERELL","SHAVONDA","SHAUNTE","SHARDA","SHAKITA","SENA","RYANN","RUBI","RIVA","REGINIA","REA","RACHAL","PARTHENIA","PAMULA","MONNIE","MONET","MICHAELE","MELIA","MARINE","MALKA","MAISHA","LISANDRA","LEO","LEKISHA","LEAN","LAURENCE","LAKENDRA","KRYSTIN","KORTNEY","KIZZIE","KITTIE","KERA","KENDAL","KEMBERLY","KANISHA","JULENE","JULE","JOSHUA","JOHANNE","JEFFREY","JAMEE","HAN","HALLEY","GIDGET","GALINA","FREDRICKA","FLETA","FATIMAH","EUSEBIA","ELZA","ELEONORE","DORTHEY","DORIA","DONELLA","DINORAH","DELORSE","CLARETHA","CHRISTINIA","CHARLYN","BONG","BELKIS","AZZIE","ANDERA","AIKO","ADENA","YER","YAJAIRA","WAN","VANIA","ULRIKE","TOSHIA","TIFANY","STEFANY","SHIZUE","SHENIKA","SHAWANNA","SHAROLYN","SHARILYN","SHAQUANA","SHANTAY","SEE","ROZANNE","ROSELEE","RICKIE","REMONA","REANNA","RAELENE","QUINN","PHUNG","PETRONILA","NATACHA","NANCEY","MYRL","MIYOKO","MIESHA","MERIDETH","MARVELLA","MARQUITTA","MARHTA","MARCHELLE","LIZETH","LIBBIE","LAHOMA","LADAWN","KINA","KATHELEEN","KATHARYN","KARISA","KALEIGH","JUNIE","JULIEANN","JOHNSIE","JANEAN","JAIMEE","JACKQUELINE","HISAKO","HERMA","HELAINE","GWYNETH","GLENN","GITA","EUSTOLIA","EMELINA","ELIN","EDRIS","DONNETTE","DONNETTA","DIERDRE","DENAE","DARCEL","CLAUDE","CLARISA","CINDERELLA","CHIA","CHARLESETTA","CHARITA","CELSA","CASSY","CASSI","CARLEE","BRUNA","BRITTANEY","BRANDE","BILLI","BAO","ANTONETTA","ANGLA","ANGELYN","ANALISA","ALANE","WENONA","WENDIE","VERONIQUE","VANNESA","TOBIE","TEMPIE","SUMIKO","SULEMA","SPARKLE","SOMER","SHEBA","SHAYNE","SHARICE","SHANEL","SHALON","SAGE","ROY","ROSIO","ROSELIA","RENAY","REMA","REENA","PORSCHE","PING","PEG","OZIE","ORETHA","ORALEE","ODA","NU","NGAN","NAKESHA","MILLY","MARYBELLE","MARLIN","MARIS","MARGRETT","MARAGARET","MANIE","LURLENE","LILLIA","LIESELOTTE","LAVELLE","LASHAUNDA","LAKEESHA","KEITH","KAYCEE","KALYN","JOYA","JOETTE","JENAE","JANIECE","ILLA","GRISEL","GLAYDS","GENEVIE","GALA","FREDDA","FRED","ELMER","ELEONOR","DEBERA","DEANDREA","DAN","CORRINNE","CORDIA","CONTESSA","COLENE","CLEOTILDE","CHARLOTT","CHANTAY","CECILLE","BEATRIS","AZALEE","ARLEAN","ARDATH","ANJELICA","ANJA","ALFREDIA","ALEISHA","ADAM","ZADA","YUONNE","XIAO","WILLODEAN","WHITLEY","VENNIE","VANNA","TYISHA","TOVA","TORIE","TONISHA","TILDA","TIEN","TEMPLE","SIRENA","SHERRIL","SHANTI","SHAN","SENAIDA","SAMELLA","ROBBYN","RENDA","REITA","PHEBE","PAULITA","NOBUKO","NGUYET","NEOMI","MOON","MIKAELA","MELANIA","MAXIMINA","MARG","MAISIE","LYNNA","LILLI","LAYNE","LASHAUN","LAKENYA","LAEL","KIRSTIE","KATHLINE","KASHA","KARLYN","KARIMA","JOVAN","JOSEFINE","JENNELL","JACQUI","JACKELYN","HYO","HIEN","GRAZYNA","FLORRIE","FLORIA","ELEONORA","DWANA","DORLA","DONG","DELMY","DEJA","DEDE","DANN","CRYSTA","CLELIA","CLARIS","CLARENCE","CHIEKO","CHERLYN","CHERELLE","CHARMAIN","CHARA","CAMMY","BEE","ARNETTE","ARDELLE","ANNIKA","AMIEE","AMEE","ALLENA","YVONE","YUKI","YOSHIE","YEVETTE","YAEL","WILLETTA","VONCILE","VENETTA","TULA","TONETTE","TIMIKA","TEMIKA","TELMA","TEISHA","TAREN","TA","STACEE","SHIN","SHAWNTA","SATURNINA","RICARDA","POK","PASTY","ONIE","NUBIA","MORA","MIKE","MARIELLE","MARIELLA","MARIANELA","MARDELL","MANY","LUANNA","LOISE","LISABETH","LINDSY","LILLIANA","LILLIAM","LELAH","LEIGHA","LEANORA","LANG","KRISTEEN","KHALILAH","KEELEY","KANDRA","JUNKO","JOAQUINA","JERLENE","JANI","JAMIKA","JAME","HSIU","HERMILA","GOLDEN","GENEVIVE","EVIA","EUGENA","EMMALINE","ELFREDA","ELENE","DONETTE","DELCIE","DEEANNA","DARCEY","CUC","CLARINDA","CIRA","CHAE","CELINDA","CATHERYN","CATHERIN","CASIMIRA","CARMELIA","CAMELLIA","BREANA","BOBETTE","BERNARDINA","BEBE","BASILIA","ARLYNE","AMAL","ALAYNA","ZONIA","ZENIA","YURIKO","YAEKO","WYNELL","WILLOW","WILLENA","VERNIA","TU","TRAVIS","TORA","TERRILYN","TERICA","TENESHA","TAWNA","TAJUANA","TAINA","STEPHNIE","SONA","SOL","SINA","SHONDRA","SHIZUKO","SHERLENE","SHERICE","SHARIKA","ROSSIE","ROSENA","RORY","RIMA","RIA","RHEBA","RENNA","PETER","NATALYA","NANCEE","MELODI","MEDA","MAXIMA","MATHA","MARKETTA","MARICRUZ","MARCELENE","MALVINA","LUBA","LOUETTA","LEIDA","LECIA","LAURAN","LASHAWNA","LAINE","KHADIJAH","KATERINE","KASI","KALLIE","JULIETTA","JESUSITA","JESTINE","JESSIA","JEREMY","JEFFIE","JANYCE","ISADORA","GEORGIANNE","FIDELIA","EVITA","EURA","EULAH","ESTEFANA","ELSY","ELIZABET","ELADIA","DODIE","DION","DIA","DENISSE","DELORAS","DELILA","DAYSI","DAKOTA","CURTIS","CRYSTLE","CONCHA","COLBY","CLARETTA","CHU","CHRISTIA","CHARLSIE","CHARLENA","CARYLON","BETTYANN","ASLEY","ASHLEA","AMIRA","AI","AGUEDA","AGNUS","YUETTE","VINITA","VICTORINA","TYNISHA","TREENA","TOCCARA","TISH","THOMASENA","TEGAN","SOILA","SHILOH","SHENNA","SHARMAINE","SHANTAE","SHANDI","SEPTEMBER","SARAN","SARAI","SANA","SAMUEL","SALLEY","ROSETTE","ROLANDE","REGINE","OTELIA","OSCAR","OLEVIA","NICHOLLE","NECOLE","NAIDA","MYRTA","MYESHA","MITSUE","MINTA","MERTIE","MARGY","MAHALIA","MADALENE","LOVE","LOURA","LOREAN","LEWIS","LESHA","LEONIDA","LENITA","LAVONE","LASHELL","LASHANDRA","LAMONICA","KIMBRA","KATHERINA","KARRY","KANESHA","JULIO","JONG","JENEVA","JAQUELYN","HWA","GILMA","GHISLAINE","GERTRUDIS","FRANSISCA","FERMINA","ETTIE","ETSUKO","ELLIS","ELLAN","ELIDIA","EDRA","DORETHEA","DOREATHA","DENYSE","DENNY","DEETTA","DAINE","CYRSTAL","CORRIN","CAYLA","CARLITA","CAMILA","BURMA","BULA","BUENA","BLAKE","BARABARA","AVRIL","AUSTIN","ALAINE","ZANA","WILHEMINA","WANETTA","VIRGIL","VI","VERONIKA","VERNON","VERLINE","VASILIKI","TONITA","TISA","TEOFILA","TAYNA","TAUNYA","TANDRA","TAKAKO","SUNNI","SUANNE","SIXTA","SHARELL","SEEMA","RUSSELL","ROSENDA","ROBENA","RAYMONDE","PEI","PAMILA","OZELL","NEIDA","NEELY","MISTIE","MICHA","MERISSA","MAURITA","MARYLN","MARYETTA","MARSHALL","MARCELL","MALENA","MAKEDA","MADDIE","LOVETTA","LOURIE","LORRINE","LORILEE","LESTER","LAURENA","LASHAY","LARRAINE","LAREE","LACRESHA","KRISTLE","KRISHNA","KEVA","KEIRA","KAROLE","JOIE","JINNY","JEANNETTA","JAMA","HEIDY","GILBERTE","GEMA","FAVIOLA","EVELYNN","ENDA","ELLI","ELLENA","DIVINA","DAGNY","COLLENE","CODI","CINDIE","CHASSIDY","CHASIDY","CATRICE","CATHERINA","CASSEY","CAROLL","CARLENA","CANDRA","CALISTA","BRYANNA","BRITTENY","BEULA","BARI","AUDRIE","AUDRIA","ARDELIA","ANNELLE","ANGILA","ALONA","ALLYN","DOUGLAS","ROGER","JONATHAN","RALPH","NICHOLAS","BENJAMIN","BRUCE","HARRY","WAYNE","STEVE","HOWARD","ERNEST","PHILLIP","TODD","CRAIG","ALAN","PHILIP","EARL","DANNY","BRYAN","STANLEY","LEONARD","NATHAN","MANUEL","RODNEY","MARVIN","VINCENT","JEFFERY","JEFF","CHAD","JACOB","ALFRED","BRADLEY","HERBERT","FREDERICK","EDWIN","DON","RICKY","RANDALL","BARRY","BERNARD","LEROY","MARCUS","THEODORE","CLIFFORD","MIGUEL","JIM","TOM","CALVIN","BILL","LLOYD","DEREK","WARREN","DARRELL","JEROME","FLOYD","ALVIN","TIM","GORDON","GREG","JORGE","DUSTIN","PEDRO","DERRICK","ZACHARY","HERMAN","GLEN","HECTOR","RICARDO","RICK","BRENT","RAMON","GILBERT","MARC","REGINALD","RUBEN","NATHANIEL","RAFAEL","EDGAR","MILTON","RAUL","BEN","CHESTER","DUANE","FRANKLIN","BRAD","RON","ROLAND","ARNOLD","HARVEY","JARED","ERIK","DARRYL","NEIL","JAVIER","FERNANDO","CLINTON","TED","MATHEW","TYRONE","DARREN","LANCE","KURT","ALLAN","NELSON","GUY","CLAYTON","HUGH","MAX","DWAYNE","DWIGHT","ARMANDO","FELIX","EVERETT","IAN","WALLACE","KEN","BOB","ALFREDO","ALBERTO","DAVE","IVAN","BYRON","ISAAC","MORRIS","CLIFTON","WILLARD","ROSS","ANDY","SALVADOR","KIRK","SERGIO","SETH","KENT","TERRANCE","EDUARDO","TERRENCE","ENRIQUE","WADE","STUART","FREDRICK","ARTURO","ALEJANDRO","NICK","LUTHER","WENDELL","JEREMIAH","JULIUS","OTIS","TREVOR","OLIVER","LUKE","HOMER","GERARD","DOUG","KENNY","HUBERT","LYLE","MATT","ALFONSO","ORLANDO","REX","CARLTON","ERNESTO","NEAL","PABLO","LORENZO","OMAR","WILBUR","GRANT","HORACE","RODERICK","ABRAHAM","WILLIS","RICKEY","ANDRES","CESAR","JOHNATHAN","MALCOLM","RUDOLPH","DAMON","KELVIN","PRESTON","ALTON","ARCHIE","MARCO","WM","PETE","RANDOLPH","GARRY","GEOFFREY","JONATHON","FELIPE","GERARDO","ED","DOMINIC","DELBERT","COLIN","GUILLERMO","EARNEST","LUCAS","BENNY","SPENCER","RODOLFO","MYRON","EDMUND","GARRETT","SALVATORE","CEDRIC","LOWELL","GREGG","SHERMAN","WILSON","SYLVESTER","ROOSEVELT","ISRAEL","JERMAINE","FORREST","WILBERT","LELAND","SIMON","CLARK","IRVING","BRYANT","OWEN","RUFUS","WOODROW","KRISTOPHER","MACK","LEVI","MARCOS","GUSTAVO","JAKE","LIONEL","GILBERTO","CLINT","NICOLAS","ISMAEL","ORVILLE","ERVIN","DEWEY","AL","WILFRED","JOSH","HUGO","IGNACIO","CALEB","TOMAS","SHELDON","ERICK","STEWART","DOYLE","DARREL","ROGELIO","TERENCE","SANTIAGO","ALONZO","ELIAS","BERT","ELBERT","RAMIRO","CONRAD","NOAH","GRADY","PHIL","CORNELIUS","LAMAR","ROLANDO","CLAY","PERCY","DEXTER","BRADFORD","DARIN","AMOS","MOSES","IRVIN","SAUL","ROMAN","RANDAL","TIMMY","DARRIN","WINSTON","BRENDAN","ABEL","DOMINICK","BOYD","EMILIO","ELIJAH","DOMINGO","EMMETT","MARLON","EMANUEL","JERALD","EDMOND","EMIL","DEWAYNE","WILL","OTTO","TEDDY","REYNALDO","BRET","JESS","TRENT","HUMBERTO","EMMANUEL","STEPHAN","VICENTE","LAMONT","GARLAND","MILES","EFRAIN","HEATH","RODGER","HARLEY","ETHAN","ELDON","ROCKY","PIERRE","JUNIOR","FREDDY","ELI","BRYCE","ANTOINE","STERLING","CHASE","GROVER","ELTON","CLEVELAND","DYLAN","CHUCK","DAMIAN","REUBEN","STAN","AUGUST","LEONARDO","JASPER","RUSSEL","ERWIN","BENITO","HANS","MONTE","BLAINE","ERNIE","CURT","QUENTIN","AGUSTIN","MURRAY","JAMAL","ADOLFO","HARRISON","TYSON","BURTON","BRADY","ELLIOTT","WILFREDO","BART","JARROD","VANCE","DENIS","DAMIEN","JOAQUIN","HARLAN","DESMOND","ELLIOT","DARWIN","GREGORIO","BUDDY","XAVIER","KERMIT","ROSCOE","ESTEBAN","ANTON","SOLOMON","SCOTTY","NORBERT","ELVIN","WILLIAMS","NOLAN","ROD","QUINTON","HAL","BRAIN","ROB","ELWOOD","KENDRICK","DARIUS","MOISES","FIDEL","THADDEUS","CLIFF","MARCEL","JACKSON","RAPHAEL","BRYON","ARMAND","ALVARO","JEFFRY","DANE","JOESPH","THURMAN","NED","RUSTY","MONTY","FABIAN","REGGIE","MASON","GRAHAM","ISAIAH","VAUGHN","GUS","LOYD","DIEGO","ADOLPH","NORRIS","MILLARD","ROCCO","GONZALO","DERICK","RODRIGO","WILEY","RIGOBERTO","ALPHONSO","TY","NOE","VERN","REED","JEFFERSON","ELVIS","BERNARDO","MAURICIO","HIRAM","DONOVAN","BASIL","RILEY","NICKOLAS","MAYNARD","SCOT","VINCE","QUINCY","EDDY","SEBASTIAN","FEDERICO","ULYSSES","HERIBERTO","DONNELL","COLE","DAVIS","GAVIN","EMERY","WARD","ROMEO","JAYSON","DANTE","CLEMENT","COY","MAXWELL","JARVIS","BRUNO","ISSAC","DUDLEY","BROCK","SANFORD","CARMELO","BARNEY","NESTOR","STEFAN","DONNY","ART","LINWOOD","BEAU","WELDON","GALEN","ISIDRO","TRUMAN","DELMAR","JOHNATHON","SILAS","FREDERIC","DICK","IRWIN","MERLIN","CHARLEY","MARCELINO","HARRIS","CARLO","TRENTON","KURTIS","HUNTER","AURELIO","WINFRED","VITO","COLLIN","DENVER","CARTER","LEONEL","EMORY","PASQUALE","MOHAMMAD","MARIANO","DANIAL","LANDON","DIRK","BRANDEN","ADAN","BUFORD","GERMAN","WILMER","EMERSON","ZACHERY","FLETCHER","JACQUES","ERROL","DALTON","MONROE","JOSUE","EDWARDO","BOOKER","WILFORD","SONNY","SHELTON","CARSON","THERON","RAYMUNDO","DAREN","HOUSTON","ROBBY","LINCOLN","GENARO","BENNETT","OCTAVIO","CORNELL","HUNG","ARRON","ANTONY","HERSCHEL","GIOVANNI","GARTH","CYRUS","CYRIL","RONNY","LON","FREEMAN","DUNCAN","KENNITH","CARMINE","ERICH","CHADWICK","WILBURN","RUSS","REID","MYLES","ANDERSON","MORTON","JONAS","FOREST","MITCHEL","MERVIN","ZANE","RICH","JAMEL","LAZARO","ALPHONSE","RANDELL","MAJOR","JARRETT","BROOKS","ABDUL","LUCIANO","SEYMOUR","EUGENIO","MOHAMMED","VALENTIN","CHANCE","ARNULFO","LUCIEN","FERDINAND","THAD","EZRA","ALDO","RUBIN","ROYAL","MITCH","EARLE","ABE","WYATT","MARQUIS","LANNY","KAREEM","JAMAR","BORIS","ISIAH","EMILE","ELMO","ARON","LEOPOLDO","EVERETTE","JOSEF","ELOY","RODRICK","REINALDO","LUCIO","JERROD","WESTON","HERSHEL","BARTON","PARKER","LEMUEL","BURT","JULES","GIL","ELISEO","AHMAD","NIGEL","EFREN","ANTWAN","ALDEN","MARGARITO","COLEMAN","DINO","OSVALDO","LES","DEANDRE","NORMAND","KIETH","TREY","NORBERTO","NAPOLEON","JEROLD","FRITZ","ROSENDO","MILFORD","CHRISTOPER","ALFONZO","LYMAN","JOSIAH","BRANT","WILTON","RICO","JAMAAL","DEWITT","BRENTON","OLIN","FOSTER","FAUSTINO","CLAUDIO","JUDSON","GINO","EDGARDO","ALEC","TANNER","JARRED","DONN","TAD","PRINCE","PORFIRIO","ODIS","LENARD","CHAUNCEY","TOD","MEL","MARCELO","KORY","AUGUSTUS","KEVEN","HILARIO","BUD","SAL","ORVAL","MAURO","ZACHARIAH","OLEN","ANIBAL","MILO","JED","DILLON","AMADO","NEWTON","LENNY","RICHIE","HORACIO","BRICE","MOHAMED","DELMER","DARIO","REYES","MAC","JONAH","JERROLD","ROBT","HANK","RUPERT","ROLLAND","KENTON","DAMION","ANTONE","WALDO","FREDRIC","BRADLY","KIP","BURL","WALKER","TYREE","JEFFEREY","AHMED","WILLY","STANFORD","OREN","NOBLE","MOSHE","MIKEL","ENOCH","BRENDON","QUINTIN","JAMISON","FLORENCIO","DARRICK","TOBIAS","HASSAN","GIUSEPPE","DEMARCUS","CLETUS","TYRELL","LYNDON","KEENAN","WERNER","GERALDO","COLUMBUS","CHET","BERTRAM","MARKUS","HUEY","HILTON","DWAIN","DONTE","TYRON","OMER","ISAIAS","HIPOLITO","FERMIN","ADALBERTO","BO","BARRETT","TEODORO","MCKINLEY","MAXIMO","GARFIELD","RALEIGH","LAWERENCE","ABRAM","RASHAD","KING","EMMITT","DARON","SAMUAL","MIQUEL","EUSEBIO","DOMENIC","DARRON","BUSTER","WILBER","RENATO","JC","HOYT","HAYWOOD","EZEKIEL","CHAS","FLORENTINO","ELROY","CLEMENTE","ARDEN","NEVILLE","EDISON","DESHAWN","NATHANIAL","JORDON","DANILO","CLAUD","SHERWOOD","RAYMON","RAYFORD","CRISTOBAL","AMBROSE","TITUS","HYMAN","FELTON","EZEQUIEL","ERASMO","STANTON","LONNY","LEN","IKE","MILAN","LINO","JAROD","HERB","ANDREAS","WALTON","RHETT","PALMER","DOUGLASS","CORDELL","OSWALDO","ELLSWORTH","VIRGILIO","TONEY","NATHANAEL","DEL","BENEDICT","MOSE","JOHNSON","ISREAL","GARRET","FAUSTO","ASA","ARLEN","ZACK","WARNER","MODESTO","FRANCESCO","MANUAL","GAYLORD","GASTON","FILIBERTO","DEANGELO","MICHALE","GRANVILLE","WES","MALIK","ZACKARY","TUAN","ELDRIDGE","CRISTOPHER","CORTEZ","ANTIONE","MALCOM","LONG","KOREY","JOSPEH","COLTON","WAYLON","VON","HOSEA","SHAD","SANTO","RUDOLF","ROLF","REY","RENALDO","MARCELLUS","LUCIUS","KRISTOFER","BOYCE","BENTON","HAYDEN","HARLAND","ARNOLDO","RUEBEN","LEANDRO","KRAIG","JERRELL","JEROMY","HOBERT","CEDRICK","ARLIE","WINFORD","WALLY","LUIGI","KENETH","JACINTO","GRAIG","FRANKLYN","EDMUNDO","SID","PORTER","LEIF","JERAMY","BUCK","WILLIAN","VINCENZO","SHON","LYNWOOD","JERE","HAI","ELDEN","DORSEY","DARELL","BRODERICK","ALONSO"]

// names.sort()
// let result = 0
// let valuesOfLetters = { A:1 , B:2 , C:3 , D:4 , E:5 , F:6 , G:7 , H:8 , I:9 , J:10 , K:11 , L:12 , M:13 , N:14 , O:15 , P:16 , Q:17 , R:18 , S:19 , T:20 , U:21 , V:22 , W:23 , X:24 , Y:25 , Z:26 }
// for (i = 0 ; i < names.length ; i++ ){
//     let sum = 0
//     for (j = 0 ; j < names[i].length ; j++){
//         sum += valuesOfLetters[names[i][j]]
//     }
//     result += sum*(i+1)
// }
// console.log(result)

// --------------------------------------- Exercice 23 _____________________ TO IMPROVE

// function test(y){
//     let testCount = 0
//     for (let i=1; i<y; i++){    
//         if(y % i == 0 ){
//             testCount += i
//         }
//     }
//     return testCount
// }

// function result(x){
    
//     let totalCount = 0
//     for (j = 1; j < x; j++){
//         let count = 0
//         for (let i=1; i<j; i++){
//             if(j % i == 0){
//                 count += i

//             }
//         }
//         if ( count > j && j/2 >= test(j/2)) {
//         totalCount += count
//         console.log("number // count test // Count")
//         console.log(j + "        " + count + "         " + j/2 + "         " + test(j/2))
//         console.log("")
//         }
    
//     }
//     return `the result is : ${totalCount} ! Thats the end for today`
// }

// console.log(result(28124*2))

// --------------------------------- exercice 24

// function test(){
//     let newArray = []
//     let resultArray = []
//     let limit = 9
//     for(a = 0; a <= limit ; a++){
//         for (b = 0; b <= limit ; b++){
//             if (![a].includes(b)){
//                 for(c = 0; c <= limit ; c++){
//                     if (![a,b].includes(c)){
//                        for(d = 0 ; d <= limit ; d++){
//                             if(![a,b,c].includes(d)){
//                                 for(e = 0 ; e <= limit ; e++){
//                                     if(![a,b,c,d].includes(e)){
//                                         for(f = 0 ; f <= limit ; f++){
//                                             if(![a,b,c,d,e].includes(f)){
//                                                 for(g = 0 ; g <= limit ; g++){
//                                                     if(![a,b,c,d,e,f].includes(g)){
//                                                         for(h = 0 ; h <= limit ; h++){
//                                                             if(![a,b,c,d,e,f,g].includes(h)){
//                                                                 for(i = 0 ; i <= limit ; i++){
//                                                                     if(![a,b,c,d,e,f,g,h].includes(i)){
//                                                                         for(j = 0 ; j <= limit ; j++){
//                                                                             if(![a,b,c,d,e,f,g,h,i].includes(j)){
//                                                                                 newArray.push(a)
//                                                                                 newArray.push(b)
//                                                                                 newArray.push(c)
//                                                                                 newArray.push(d)
//                                                                                 newArray.push(e)
//                                                                                 newArray.push(f)
//                                                                                 newArray.push(g)
//                                                                                 newArray.push(h)
//                                                                                 newArray.push(i)
//                                                                                 newArray.push(j)
//                                                                                 resultArray.push(newArray.join(''))
//                                                                                 newArray = [];
//                                                                                 if (resultArray.length > 1000000){
//                                                                                   return resultArray[999999]
//                                                                                 }
//                                                                             }
//                                                                         }
//                                                                     }
//                                                                 }
//                                                             }
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     }
//                                 } 
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(test())

// ----------------------------------- exercice 25 ____ IMPROVE WITH MATH LIBRARY


// let a = 1n
// let b = 1n
// let c = 0n
// let count = 2

// do {
//     // console.log(" ")
//     count += 1
    
//     c = b + a;
//     a = b;
//     b = c;
//     // console.log(` the result is F ${count} : ${c}`)
//   }
//   while (c.toString().length < 1000);

//   console.log(count)

//   // create an instance of math.js with BigNumber configuration

// ------------------------------Problem 28
// let spacer = 2
// let sum = 0
// let count = 0
// let size = 1001

// for(let i=3 ; i<= size ; i+=2){

//   for(let j = Math.pow(i-2, 2) ; j < (Math.pow(i,2)) ; j++ ){ 
//     // console.log(j)
    

//     if(j == Math.pow(i-2, 2) ){

//       sum += j
//       // console.log("     " + sum)


//     } else if (j == (Math.pow(i-2, 2) + spacer + count)){

//       count += spacer
//       sum += j
//       // console.log("                    " + sum)

//     }

//   }

//   spacer += 2
//   count = 0
//   if (i == size){
//     sum += Math.pow(i,2)
//   }

// }
// console.log("And the result is : " + sum)

// --------------------------------------------Exercice 20

// let number = 1n
// let sum = 0n

// for (i=0;i<100;i++){
//   number *= BigInt(i + 1);
// }

// console.log(number)
// number = number.toString()

// for(i=0 ; i<number.length ; i++){
//   sum += BigInt(Number(number[i]))
// }
// console.log("Hello the sum is : " + sum)

// ---------------------------------------------- Exercice 31

// let limit = 200
// let total = 0
// let times = 0
// let acent = 1
// let bcent = 2
// let ccent = 5
// let dcent = 10
// let ecent = 20
// let fcent = 50
// let gcent = 100
// let hcent = 200

// // count = 8 because all coins on their own can get to 2 pounds 1*200, 2*100,...2*1
// let count = 8

// let possibility = []

// let possibilities = []

// // possibility.push(`${times}x${a} + ${times}x${b} + ${times}x${c} + ${times}x${d} + ${times}x${e}`)
// // possibilities.push(`2x${b}`)
// // possibilities.push(`2x`)
// // console.log(possibilities)

// for (a = 0 ; a < 200 ; a++ ){
//     for (b = 0 ; b < 100 ; b++ ){
//         for (c = 0 ; c < 40 ; c++ ){
//             for (d = 0 ; d < 20 ; d++ ){
//                 for (e = 0 ; e < 10 ; e++ ){
//                     for (f = 0 ; f < 4 ; f++ ){
//                         for (g = 0 ; g < 2 ; g++ ){
//                             total = a*acent + b*bcent + c*ccent + d*dcent + e*ecent + f*fcent + g*gcent
//                             if (total == 200){
//                                 count+=1
//                                 // possibility.push(`${a}*${acent} `)
//                                 // possibility.push(`${b}*${bcent} `)
//                                 // possibility.push(`${c}*${ccent} `)
//                                 // possibility.push(`${d}*${dcent} `)
//                                 // possibility.push(`${e}*${ecent} `)
//                                 // possibility.push(`${f}*${fcent} `)
//                                 // possibility.push(`${g}*${gcent} `)
//                                 // possibilities.push(possibility.join(''))
//                                 // possibility = []
//                                 total = 0
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// // console.log(possibilities)
// // console.log(possibilities.length)

// console.log(count)

// --------------------------------------------------Exercice 32

// --------------------------------------------------leet code longest substring to revise

// function lengthOfLongestSubstring(s) {
//     // console.log(s[0])
//     // console.log(s.length)
//     let count = 0
//     let bestCount = 0
//     let testCount = 0
//     let interval = 0

//     for(i = 0 ; i < s.length ; i++){
//         if (i == 0 || count == 0 && s[i] !== s[i-1]){
//             count ++
//             if(bestCount < count){
//                 bestCount = count;
//             }   
//         } else if (i == 1 && s[i] !== s[i-1] || count == 1 && s[i] !== s[i-1]){
//             count ++
//                 if(bestCount < count){
//                     bestCount = count;
//                     } 
//         } else if (i >= 2 && s[i] !== s[i-1]){
//                 for(j = interval ; j < i ; j++){
//                     if (s[i] !== s[j]){
//                         console.log(`this is the interval ${interval}`)
//                         console.log(`this is i ${i}`)
//                         console.log(`this is j ${j}`)
//                         testCount ++
//                         console.log(`this is the counttest ${testCount}`)
//                     }
//                 }
                
//                 if ( testCount == i-interval){
//                     count ++
//                     test = 0
//                     bestCount = count;
//                 } else {
//                     count = 1
//                     i = j + interval
//                     interval = i
                    
//                 }
//                 testCount = 0
//         } else{
//             count = 1
//             interval = i
//         }

//         console.log(`ok the count is ${count}`)
        
//     }
//     console.log(bestCount)
//     return bestCount
    
// }
// lengthOfLongestSubstring("dvdf")

