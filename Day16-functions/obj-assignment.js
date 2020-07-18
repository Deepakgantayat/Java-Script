let n1=10
let n2=n1
console.log(n1,n2)//10 10
n1= 20
console.log(n1,n2) //in premitive data type the value will only copy //pass by value//20 10

const arr1 = [10,20]
const arr2 = arr1 //arr2 holds the reference value of arra1 // non premitive data type// pass by reference

console.log(arr1,arr2)//[ 10, 20 ] [ 10, 20 ]
arr1.push(30,40)//adding value to arr1, will also be reflected in arr2

console.log(arr1,arr2)//[ 10, 20, 30, 40 ] [ 10, 20, 30, 40 ]
arr2.push(50) //adding value to arr2 will aslo reflected in arr1
console.log(arr1,arr2)//[ 10, 20, 30, 40, 50 ] [ 10, 20, 30, 40, 50 ]

//same above with reference to an object
const person = {
    name: 'kitu'
}
const student = person
console.log(student,person)//{ name: 'kitu' } { name: 'kitu' }

person.name = 'deepak'
console.log(student,person)//{ name: 'deepak' } { name: 'deepak' }

student.name = 'kumar'
console.log(student,person)//{ name: 'kumar' } { name: 'kumar' }