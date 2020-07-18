//using var keyword
function changename(isadmin){
   console.log(name) //undefined
if(isadmin) {
    var name = 'kitu'
}
console.log(name) //kitu
}
//console.log(name) //ReferenceError: name is not defined
changename(true)

//let
function changenamelet(isadmin){
    //console.log(name)//ReferenceError: - not hoisted
    if (isadmin)
    {
    let name = 'kitu' //name variable is only available inside the if condition
    console.log(name) //sujith
}
}
changenamelet(true)

//loop with var
for (var i= 0; i<5; i++){
    console.log(i)
}
console.log('outside loop', i) //get access to it out side the loop also

for(let j = 0; j<5; j++)
{
    console.log(j)
}
//console.log('outside loop', j) //referenceerror
