// how to find which number is max

//step - 1 :
let disha = 20;
let rohit = 48;

if(disha > rohit){
    console.log('disha get berry')
}
else{
    console.log('rohit get berry')
}

// step - 2 : using function

function theMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

// const max = theMax(49, 39)
// console.log('the big num is :', max)

const max1 = theMax(20, 39);
const max2 = theMax(90, 80);
const ultimateMax = theMax(max1, max2)
console.log('the big is : ', ultimateMax)
