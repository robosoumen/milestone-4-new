const phones = [
    {name:'samsung',price : 30000},
    {name:'intel',price : 20000},
    {name:'micromax',price : 10000},
    {name:'apple',price : 300000},
    {name:'htc',price : 220000},
]

function cheepestPhone(phones){
    // console.log(phones)
    let cheep = phones[0];
    for(const phone of phones){
        // console.log(phone)
        if(phone.price < cheep.price){
            cheep = phone;
        }
    }
    return cheep
}
const cheep = cheepestPhone(phones);
console.log('cheepest phone is :', cheep)