const heights = [20, 30, 40, 50, 60000000, 70, 80, 90, 90000];
function getMax (numbers){
    let max = numbers[0];
    // const maxNum = []; xxxxxx
    // console.log(numbers);
    for(const num of numbers){
        // console.log(num)
        // let max = num;
        if(num > max){
            max = num;
        }
    }
    return max
}
const max = getMax(heights);
console.log('max value is :', max);

//---------------------

const height = [20, 30, 40, 50, 60000000, 70, 80, 90, 90000, 1];
function getMin (numbers){
    let min = numbers[0];
    // const maxNum = []; xxxxxx
    // console.log(numbers);
    for(const num of numbers){
        // console.log(num)
        // let max = num;
        if(num < min){
            min = num;
        }
    }
    return min
}
const min = getMin(height);
console.log('min value is :', min);