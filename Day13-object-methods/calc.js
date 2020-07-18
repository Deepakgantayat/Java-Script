// const calculator = {
//     add: function(a,b){
//         c = a + b
//         return c
//     },
//     sub: function(a,b){
//         c = a-b
//         return c
//     }
// }
// console.log(calculator.add(10, 20))//30
// console.log(calculator.sub(20,5))//15



const calculator = {
    result : 0,
    add: function(a,b){
        this.result = a + b
        return this.result
    }
    // sub: function(a,b){
    //     this.result = a-b
    //     return result
   // }
}
console.log(calculator.result)
console.log(calculator.add(10, 20))//30
console.log(calculator.result)
//console.log(calculator.sub(20,5))//15