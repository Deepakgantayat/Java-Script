const numbers = [10,20,30]

// synchronous function
function print(e){
    console.log(e)
}

//number.forEach(function(e){
//      console.log(e)
// })

numbers.forEach(print)