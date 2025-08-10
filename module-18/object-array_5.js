const employee =[
    {name:'soumen', designation:'writer', salary:20000},
    {name:'atik', designation:'content writer', salary:10000},
    {name:'rohim', designation:'developer', salary:40000},
]
// console.log(employee[0].salary)
// console.log(employee[2].designation)
// for(const employ of employee){
//     console.log(employ.salary, employ.designation)
// }
employee[0].name = 'saheb'
for(const emp of employee){
    const person = emp;
    const personInfo = person.name + ' : ' + person.salary;
    console.log(personInfo)
}