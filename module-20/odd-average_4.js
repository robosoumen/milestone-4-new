function oddAverage(numbers){
    // console.log(numbers)
    const odds = [];
    for(const num of numbers){
        // console.log(num)
        if(num % 2 === 1){
            // console.log(num);
            odds.push(num);
        }
    }
    // console.log(odds)
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log('the sum is : ',sum, count)
    const avg = sum / count;
    return avg;
}
const number = [20, 21, 22, 23, 24, 25, 26, 27, 9, 10];
const avg = oddAverage(number);
console.log('average of the odd number is : ', avg);
