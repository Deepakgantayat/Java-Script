//find element basedon condition

const number = [10,20,30,40,50]

const result = number.find(function(n){
    return n>= 35
})
console.log(result)



const result2 = number.find(function(n){
    return n>= 1000
})
console.log(result2)


function findEle(number, num){
 const result = number.find(function(n){
     return n>= num
 })
 return result
}
console.log(findEle(number, 35))
