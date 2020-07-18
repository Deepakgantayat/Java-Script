//arrow function - only as function expression, an a substitute for anonymous function (should not be used for methods)

//es5
// var greet = function(name){
//     console.log(this)//global object
//     return 'hello' + name
// }

// console.log(greet)

//es6
// console.log(this)//{}
// const sayHello = (name) => {
//     console.log(this)//{}
//     return 'Hello' + name
// }

//if 1 para, () is optional
//const sayHello = name => {
   // return 'hello' + name
//}

//const sayHello = name => 'Hello' + name

// console.log(sayHello('ani'))
//behaviour of the this keyword,
//function - global object
//arrow function - this value, is thevalue of this keyword outside the function

console.log(this)//{}
const person = {
    name: 'kitu',
    city: 'Bangalore',
    citiesLived: function() { // must be es5 function, because we want this to refer to the current object
        this.cities.forEach(function(city){
    console.log(this.name)//here this refers to the current object
    })
}
}
console.log(person.citiesLived())