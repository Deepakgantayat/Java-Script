const values = [ true, false, 0, 1, -1, '', undefined,'dct', [], {}, null, NaN, [10], {name: 'kitu'}]
const truthy = [], falsy = []
const truthy = values.filter(function(n){
   
    return n
})
const truthy = values.filter(function(n){
   
    return !n
})
console.log(truthyFalsy(values))