function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply('f', 4);
console.log(result);

//---------------------------------

function fullName (first, second){
    if(typeof first !== 'string'){
        return 'type a string'
    }
    else if(typeof second !== 'string'){
        return 'type a validation string'
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName(2,'bera')
// console.log(full)

function getPrice(product){
    // console.log(typeof product)
    if(typeof product !== 'object'){
        return 'please type an object'
    }
    const price = product.price;
    return price;
}
// const price = getPrice({name:'dandi',price:35,color:'blue'})
const price = getPrice([30,60,9])
console.log(price)

//-------------------
function getSecond(numbers){
    console.log(Array.isArray(numbers))
    const second = numbers[1];
    return second;
}
const second = getSecond([90,80,7])
console.log(second)