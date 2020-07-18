//const players = [] //const players = new array()

const p1 = 'viarat', p2 ='suresh', p3 = 'raina', p4 = 'dhoni'

//array is an ordered, integerindexed, collection of value
const players =['virqat', 'suresh', 'raina', 'dhoni']
console.log(players)
console.log(players[0])
console.log(players[2])
console.log(players[20])//undefined

console.log(typeof players)//object

//properties of an array
console.log(players.length)

//last element of an array will always be length-1
console.log(players[players.length-1])//'suersh


//methods

//add element to an array
//adding to the end-push

players.push('jadeja') //returns the new length of the array //5

//adding to the begining
players.unshift('shewag') //returns the new length of the array //6
console.log(players)

//add element to a given index(in between)
players.splice(2, 0, 'rahul') //return[]//empty array

const fruits = []
fruits.push('apple', 'mango', 'mango', 'banana', 'chiku', 'strawberry' )



//remove elements from an array
//remove element from the end -pop
fruits.pop() //remove the last element fom the array and return the removed element //'strawberry'

//remove elemnt from the begining - shift
fruits.shift() //remove element from the begining and return the removed element //'apple'


//remove element from a specific index -splice
fruits.splice(3, 1) //remove the elemnt from the 3rd index and return the removedelement
console.log(fruits)

//update the value inside an array
const city =['bangalore', 'mysore', 'mangalore']
console.log(city) //[ 'bangalore', 'mysore', 'mangalore' ]

city[1] = 'tmkur'
console.log(city) //[ 'bangalore', 'tmkur', 'mangalore' ]

console.log(city.reverse())
console.log(city)

console.log(players)
console.log(players.sort())
console.log(players)