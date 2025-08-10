const subject = ['physics', 'chemistry', 'javascript','geography'];
for(let i = 0;i < subject.length;i++){
    console.log(subject[i])
}
const rev_subject = subject.reverse();
console.log(rev_subject)

const sort_subject = subject.sort();
console.log(sort_subject)


// array-of-object
const gadget =[
    {name:'laptop', brand:'asus', price:20000},
    {name:'tablet', brand:'apple', price:10000},
    {name:'phone', brand:'samsung', price:40000},
]


//2d array or array of array
const matrix =[
    [20, 30, 40],
    [30, 60 ,80],
    [90, 80, 10]
]