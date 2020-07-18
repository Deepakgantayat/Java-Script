function add(n1,n2){
    return n1+n2
}
console.log(add())//we didnot pass any argument while declaring//NaN-not a number bcz undefined + undefined = NaN, typeof(NaN)=number


//set default parameter
//es5
function add(n1,n2){
   n1= (n1==undefined) ? 0 : n1 //n1 || 0
   n2 = (n2 == undefined) ? 0 : n2 //n2||0
    return n1+n2
}
console.log(add())//0
console.log(add(10))//10
console.log(add(10,20))//30

//es6
function sum(n1= 0, n2=0){
    return n1+n2
}
console.log(sum())//0
console.log(sum(10,20))