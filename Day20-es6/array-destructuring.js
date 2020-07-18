//es5
var fruits = [ 'apple','mango','banana','grapes']
var fruit1 = fruits[0]
var fruit2 = fruits[2]

//es6 - array destructuring
const cities = ['bangalore', 'mysore', 'katu', 'bbsr']
const [city1,city2] = cities 
console.log(city1, city2)

const [a1,,a2] = cities
console.log(a1,a2)

//object destructuring
function listEmployees(){
    const hr = ['kiran', 'kitu', 'kanha']
    const sales = ['surya', 'saga','sangram']
    return{
        hr,
        sales
    } 
}
const {hr, sales} = listEmployees()
console.log('list of employees in hr', hr)
console.log('list of emplyees in sales', sales)

//array destructuring
// function list(){
//     const hr = ['kiran', 'kitu', 'kanha']
//     const sales = ['surya', 'saga','sangram']
//     return [hr, sales]
// }
// const [hr, sales] = list()
// console.log('list of employess in hr', hr)
// console.log('list of employees in sales', sales)