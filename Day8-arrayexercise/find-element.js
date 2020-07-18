//find value equal to something

const numbers = [10,20,30,40,50]
console.log(numbers.includes(30)) //true //return boolean
console.log(numbers.includes(100)) //false

console.log(numbers.indexOf(30) >= 0)//true
console.log(numbers.indexOf(300) >= 0)//false