//anatomy of a function
//function declaration

//function keyword-reserved
//greet - function name
//name-parameter of a function, parameterare local to the function
function greet(name){
    return 'hi ' + name
}
console.log(greet('kitu'))//greet()//hi kitu
//calling a function or invoking a function
//'kitu' - argument

//function expression
const sayHello = function(name){
    return 'hello ' + name
}

console.log(sayHello('deepak'))//hello deepak