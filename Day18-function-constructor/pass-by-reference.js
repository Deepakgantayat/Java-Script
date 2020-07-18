//all objects are pass by reference
const numbers = [10,20]

function addSomeMore(numbers){
    numbers.push(30,40,50)
    return numbers
}
console.log(addSomeMore(numbers))//[ 10, 20, 30, 40, 50 ]
console.log(numbers)//[ 10, 20, 30, 40, 50 ]

const person = {
    name: 'raka',
    city : 'bangalore'
}
function changeCity(person, newCity){
    person.city = newCity
    return person
}
console.log(changeCity(person, 'mysore'))//{ name: 'raka', city: 'mysore' }
console.log(person)//{ name: 'raka', city: 'mysore' }