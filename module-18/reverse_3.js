let numbers = [1,2,3,4];
const reverse = [];
//system-1
// for(let i = 0;i < numbers.length;i++){
//     console.log(numbers[i]);
//     // reverse.push(numbers[i]);
//     reverse.unshift(numbers[i]);
// }
// console.log(reverse);


//system-2
// for(let i = numbers.length - 1;i >= 0; i--){
//     console.log(numbers[i])
//     reverse.push(numbers[i])
// }
// console.log(reverse)


//system-3
// for(const num of numbers){
//     reverse.unshift(num);
// }
// console.log(reverse)

// system-4
console.log(numbers);
numbers.reverse();
console.log(numbers);