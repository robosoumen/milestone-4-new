// function evenNumbersOnly(numbers){
//     // console.log(numbers)
//     const evens = [];
//     for(const num of numbers){
       
//         // console.log(num)
//         if(num % 2 === 0){
//             console.log(num);
//             evens.push(num);
            
//         }
        
//     }
//     return evens;
// }

// const number = [21, 30, 43, 50, 60];
// const evens = evenNumbersOnly(number)
// console.log('even numbers are - ', evens)


function sumOfEvenNumbers(number){
    let sum = 0;
    for(const num of number){
        if(num % 2 === 0){
            console.log(num)
            sum = sum + num;
        }
    }
    return sum;
}

const numberr = [2, 3, 4, 5, 6, 7, 8]
const sum = sumOfEvenNumbers(numberr);
console.log('sum of the even numbers is -', sum)
