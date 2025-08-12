const price = [20000, 30000, 400000, 50000, 1000];

function minPh(numbers){
    let min = numbers[0];
    // console.log(numbers)
    for(const num of numbers){
        // console.log(num)
        if(num < min){
            min = num;
        }
    }
    return min
}

const cheep = minPh(price);
console.log('cheepest one is :', cheep)