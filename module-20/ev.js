function evenAverage(number){
    const even = [];
    // console.log(number)
    for(const num of number){
        // console.log(num)
        if(num % 2 === 0){
            // console.log(num)
            even.push(num)
        }
    }
    // console.log(even)
    let sum = 0;
    for(const numb of even){
        sum = sum + numb;
    }
    const count = even.length;
    console.log("sum is : ",sum,count )
    const avgg = sum / count;
    return avgg;

}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
const evenAvg = evenAverage(num);
console.log('the average of even numbers is : - ', evenAvg)

