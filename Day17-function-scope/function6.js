let n1= 10, n2= 20

function add(n1,n2){
   const result= n1+n2
    return result
}
console.log(add(n1,n2))//30
//console.log(result)//reference error: result is not defined
//a variable declared inside the function is available only inside the function, here result is declared inside the function add
//and we are trying to access the result outside of the function