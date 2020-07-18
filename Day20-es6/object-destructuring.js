//object destructuring
//es5
var person = {
    name: 'kitu',
    city: 'Bangalore'
}

var name = person.name, city = person.city, age = person.age
console.log(name,city,age)//kitu Bangalore undefined

//es6- object destructuring

const employee = {
    code: 'dct123',
    department: 'it'
}

const {code, department, salary} = employee
console.log(code,department,salary)//dct123 it undefined