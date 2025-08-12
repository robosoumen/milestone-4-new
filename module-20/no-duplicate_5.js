function duplicateArray(array) {
    // console.log(array)
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique
}

const biriyniKhor = ['abul','babul','dabul','kabul','abul','dabul','bulbul','babul','mocbul'];
const uniqueArray = duplicateArray(biriyniKhor);
console.log(uniqueArray);