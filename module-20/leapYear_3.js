// function leapYear (year){
//     if(year % 4 === 0){
//         return true
//     }
//     else{return false}
// }
// const isLipi = leapYear(2001);
// console.log(isLipi)


//those year which is not divisible by 100 and divisible by 4
//if divisible by 400 
function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    return false;
}

const isLeap1 = isLeapYear(2100);
const isLeap2 = isLeapYear(2400);
const isLeap3 = isLeapYear(1900);
const isLeap4 = isLeapYear(2052);
console.log(isLeap1,isLeap2,isLeap3,isLeap4)
