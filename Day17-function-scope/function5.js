let n1= 10, n2= 20

function add(n1,n2){//when we pass argument it automatically declare the variable inside a function and the parameters are local to the function
    n1 = 100, n2 = 200
    return n1 + n2
}
console.log(add(n1,n2))//300//it look inside the function scope weather any varibale declared
console.log(n1,n2)//10,20// it look on the global scope
//if the global variable are same as the arguments or variable in a function it will known as shadow variable

let n1= 10, n2= 20

function add(a1, a2){//the argument is not same as the variable so the value of the variable will be 100 and 200 only
    n1 = 100, n2 = 200
    return n1 + n2
}
console.log(add(n1,n2))//300
console.log(n1,n2)//100,200