//variable declared using the keyword var get hoisted
//var player
console.log(player) //undefined
var player = 'dhoni'
console.log(player)


//es6 - let, const
//variables declared using let or const do not get hoisted
//ReferenceError: player is not defined
//console.log(player)
let name = 'kitu'
console.log(name)


//console.log(vowels)
const vowels = 'aeiou'
console.log(vowels)


//const count
//if u declare const you must give a value