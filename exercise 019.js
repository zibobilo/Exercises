// exercise 19
// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?


let leapMonths = [31,29,31,30,31,30,31,31,30,31,30,31]
let normalMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
let months = ["Janvier", "Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]
let days = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
let rest = 0
let w = 0
let count = 0
for (y = 1901 ; y < 2000 ; y++){
    if(y % 4 == 0 || y % 400 == 0){
        for(m = 0 ; m < leapMonths.length ; m++){
            for(d = 0 ; d < leapMonths[m] ; d++){
                if(w % 7 == 0){
                    w = 0
                }
                if(w==6 && d==0){
                    console.log(`${days[w]}  ${d+1} ${months[m]} ${y} Leap year`)
                    count++
                }
                w++
            }  
        }
    } else if(y % 4 !== 0 || y % 100 == 0){
        for(m = 0 ; m < normalMonths.length ; m++){
            for(d = 0 ; d < normalMonths[m] ; d++){
                if(w % 7 == 0){
                    w = 0
                }
                if(w==6 && d==0){
                    console.log(`${days[w]}  ${d+1} ${months[m]} ${y} normal year`)
                    count++
                }
                w++
            }  
        }
    }   
}

console.log(count)