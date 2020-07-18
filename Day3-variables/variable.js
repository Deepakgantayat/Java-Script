//Declaring-isdone by using var keyword
var city
console.log(city)//undefined
console.log(typeof city)//'undefined'

//Declare as well as assign
var name= 'arjun'
console.log(name)//'arjun'
console.log(typeof name)//'string'

//multiple declaratons with values assigned
var fruit1 = 'apple', fruit2 = 'mango', fruit3

//not advisable?
player = 'dhoni'
console.log(player)//'dhoni'

console.log(typeof name)//'string'

var maxspeed = 120
var temperature = 24.3
console.log(typeof maxspeed)//'number'
console.log(typeof temperature)//'number'

//typeof typeof anything will be string -because the return type of the typeof method is a string

console.log(typeof typeof maxspeed) //'string'

var isAdmin = true
console.log(isAdmin) //true
console.log(typeof isAdmin) //'boolean'

var number = [10,20,30,40]
console.log(number) //[10,20,30,40]
console.log(typeof number) //'object'

var employee = {
    name: 'arjun',
    department : 'it',
    empid : 'emp001' //always use comma

}

console.log(employee) //
console.log(typeof employee) //'object'

// in js, a variable can hold a function as its value
var greet = function(){
    return 'hi there'
}

console.log(greet) //return the value the variable holds -function
console.log(greet()) // execute the function
console.log(typeof greet) //'function'
