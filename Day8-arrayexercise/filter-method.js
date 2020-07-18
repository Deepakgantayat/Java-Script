//find all the elements which is an even number
const numbers = [10,20, 20,30,40,55]

const result = numbers.filter(function(n){
    return n % 2 == 0

})
console.log(result) //[10,20,20,30,40]


const numbers1 = [11,21,31,41,55]

const result1 = numbers1.filter(function(n){
    return n % 2 == 0

})
console.log(result1)//[]
