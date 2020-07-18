
const values = [ 'a', 'b', 'c', 'd', 'e']
console.log('before function', values) //[ 'a', 'b', 'c', 'd', 'e' ]
function arrayWithout(values, indices){
    const result= []
    for(let i = 0; i<values.length; i++){
        // if(!indices.includes(i)){
        //     result.push(values[i])
        // }
        if(indices.indexOf(i) == -1){
            result.push(values[i]) //[ 'a', 'c', 'e' ]
        }
    }
    return result
}
console.log(arrayWithout(values, [1, 3]))
//[ 'a', 'c', 'e' ]
console.log('after function', values) //[ 'a', 'b', 'c', 'd', 'e' ]
//pure function because the value after and before function is same