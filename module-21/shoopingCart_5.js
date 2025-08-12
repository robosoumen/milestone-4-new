const products = [
    {name: 'shirt', price: 1000,quantity: 2},
    {name: 'pant', price: 1200,quantity: 3},
    {name: 'cap', price: 500,quantity: 1},
    {name: 'shocks', price: 300,quantity:5}
];

function cartTotal (products){
    // console.log(products);
    let total = 0;
    for(const prod of products){
        // console.log(prod)
        const thisProductCost = prod.price * prod.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log('total is :', shoppingCost);