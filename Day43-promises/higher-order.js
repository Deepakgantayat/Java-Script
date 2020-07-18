//forEaach(function(){}), filter(function(){}), find(function(){})-these are all call back function-which will work for every ele of the object
//call back function means we will execute the function when we will get the data
//e.g axios.get().then((){}).catch((){})

//higher order function - a function that takes another function as an argument or a function which returns a function as a value, is called a higher order function


// normal question
function add(n1,n2){
    return n1 + n2
}
console.log(5,2)

//higher order question
function add(n1){
    return (n) =>{
        return n1+ n
    }
}
console.log(add(5)(2)) //7

//question add(5)(2)//op to be 7