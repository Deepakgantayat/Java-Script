const person = {
    firstName: 'Deepak',
    lastName: 'kumar',
    age : '23',
    city : 'Bangallore'
}

console.log(person.firstName)
console.log(person['firstName'])


//eg
const prop = 'lastName' // undefined
console.log(person[prop]) //'dravid
console.log(person[prop])


//for in loop
for (const key in person) {

    console.log(key, person[key])
}