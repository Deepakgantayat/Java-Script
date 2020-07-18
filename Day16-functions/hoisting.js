console.log(add(10,20))

//function declaration get hoisted
function add(n1,n2){
    return n1+n2
}
//console.log(total)
//function expression dont get hoisted
console.log(total(20,30))
var total =function(n1,n2){
    return n1+n2
}
