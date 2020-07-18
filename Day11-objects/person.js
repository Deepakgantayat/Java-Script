//key: value
//property: value
//unordered, string indexed, collection of values

const person = {
    firstName : 'Deepak',
    lastName: 'kumar',
    age : 23,
    city : 'bangalore'
}
console.log(person)
console.log(typeof person) //'object'
console.log(person.firstName)
console.log(person['age'])
console.log(person.education)// undefined

//add property to an existing object
person.country = 'INDIA'
person['state'] = 'Bangalore'

// read values
console.log(person.firstName)
console.log(person['age'])

//delete property
delete person.age
console.log(person)

//update a value
person.firstName = 'RAHUL'
console.log(person)

//all the keys (properties) of an object
console.log(Object.keys(person))
//[ 'firstName', 'lastName', 'city', 'country', 'state' ]


//all the values of an object
console.log(Object.values(person))
//[ 'RAHUL', 'kumar', 'bangalore', 'INDIA', 'Bangalore' ]

//if a certain key is peresnt
console.log(person.hasOwnProperty('education'))// false
console.log(person.education == undefined) // TRUE
Console.log(Object.key(person).includes('firstName'))//true

//if a value is present
console.log(Object.values(person).includes('INDIA'))
