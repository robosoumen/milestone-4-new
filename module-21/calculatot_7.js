function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    const subs = num1 - num2;
    return subs;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divided(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b)
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        return multiply(a, b);
    }
    else if(operation === 'divide'){
        return divided(a, b);
    }
    else{
        return "only 'add', 'subtract', 'multiply', 'divide' operation is allowed."
    }
}


const result = calculator(5, 7, 'divide')
console.log(result);