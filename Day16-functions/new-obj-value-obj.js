const person ={
    name: 'deepak'
}
//es5
const student = Object.assign({}, person)
console.log(person,student)//{ name: 'deepak' } { name: 'deepak' }

person.name = 'amar'
console.log(person,student)//{ name: 'amar' } { name: 'deepak' }
student.name= 'kitu'
console.log(person,student)//{ name: 'amar' } { name: 'kitu' }

//es6-spread operator
const emp = {...person}
console.log(person,student,emp)//{ name: 'amar' } { name: 'kitu' } { name: 'amar' }

emp.name = 'kumar'
console.log(person,student,emp)//{ name: 'amar' } { name: 'kitu' } { name: 'kumar' }