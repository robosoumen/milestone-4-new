// let price = 25;
// let comp_price = price;
// price = 10;
// comp_price = 11;
// console.log(price);
// console.log(comp_price)

const product = [20, 20, 20];
// const comp_product = product;
const comp_product = [];
for(const pd of product){
    comp_product.push(product)
}

// product[0] = 3000;
// comp_product[2] = 70000;
// console.log(product);
// console.log(comp_product);

const numbers = [20, 30, 40];
// const new_number = Array.from(numbers);
// const new_number = [].concat(numbers);
const new_number = [...numbers]
numbers.push(777)
console.log(numbers);
console.log(new_number);