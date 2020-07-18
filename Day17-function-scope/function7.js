let n1= 10, n2= 20

function add(n1,n2){
    result= n1+n2
    return result
}
console.log(add(n1,n2))//30
console.log(result)//30//creating a variable result in global scope bcz we doesnot assign it as let or const or var
//poluting globalscope- unnecessarily creating variable in global scope