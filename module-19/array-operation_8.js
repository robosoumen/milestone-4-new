function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [5, 6, 8, 9]
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is ', sum)