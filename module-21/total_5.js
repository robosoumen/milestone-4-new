const numbers = [1000, 1200, 500, 300]

const products = [
    {name: 'shirt', price: 1000},
    {name: 'pant', price: 1200},
    {name: 'cap', price: 500},
    {name: 'shocks', price: 300}
]


function getShoppingTotal(products){
    // console.log(products)
    let total =0;
    for(const product of products){
        // console.log(product)
        total = total + product.price;
    }
    return total;
}
const total = getShoppingTotal(products);
console.log('aj kharach hobe :', total)