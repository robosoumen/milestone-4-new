// function add(price1,price2){
//     const total = price1 + price2;
//     return total;
// }

// const bill = add(5, 80);

// function add2(price1,price2){
//     return price1 + price2;
// }
// const bill2 = add2(6,80)
// console.log(bill,bill2)

// function doMath(num1, num2){
//     const add = num1 + num2;
//     const subs = num1 - num2;
//     const mult = add * subs;
//     const div = mult / 2;
//     return div;
// }

// const result = doMath(10, 5)
// console.log(result)

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const theNumer = isEven(21)
console.log(theNumer)