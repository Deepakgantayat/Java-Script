//object short hand properties
//es5
var name = 'kitu', city = 'Bangalore'
var person = {
    name: name,
    city: city
}
console.log(person)//{ name: 'kitu', city: 'Bangalore' }

//es6
const code = 'dect123', department = 'it'
const employee = {
    code,
    department
}
console.log(employee)//{ code: 'dect123', department: 'it' }

//object short hand methods
//es5
var student = {
    name: 'kitu',
    details: function(){
        return this.name
    }
}
console.log(student.details())//kitu

//es6
var customer = {
    name: 'ravi',
    details() {
        return this.name
    }
}
console.log(customer.details())//ravi