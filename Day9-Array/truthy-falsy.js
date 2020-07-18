/* 
falsy - false, 0, '' , undefined, null,NaN
turthy - true, 1, -1, 'dct', [], {}, [10], {name: 'kitu'}
*/

const values = [ true, false, 0, 1, -1, '', undefined,'dct', [], {}, null, NaN, [10], {name: 'kitu'}]

function truthyFalsy(values){
    const truthy = [], falsy = []
    for(let i = 0; i<values.length; i ++){
        if (values[i]){
            truthy.push(values[i])
        }
        else{
            falsy.push(values[i])
        }
    }
    return [truthy, falsy]

}
console.log(truthyFalsy(values)) 
//[ [ true, 1, -1, 'dct', [], {}, [ 10 ], { name: 'kitu' } ],
//[ false, 0, '', undefined, null, NaN ] ]
