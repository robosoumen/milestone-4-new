function discountPrice(quantity){
    if(quantity <=10){
        const total = quantity * 1;
        return total;
    }
    else if(quantity <= 20){
        const total = quantity * 2;
        return total;
    }
    else{
        const total = quantity * 3;
        return total;
    }
}

const total = discountPrice(5);
console.log(total)