const str = 'aabcdaab'

function frequency(str){
    const result = {}
//with for of
for(const char of str){
    if(result.hasOwnProperty(char)){
    result[char] += 1
}
else{
 result[char] = 1
}
}
//with for loop
// for(i = 0; i < str.length; i++){
//     if(result.hasOwnProperty(str[i])){
//         result[str[i]] += 1
//     }
//     else{
//         result[str[i]] = 1
//     }
    
// }
for(const key in result){
    console.log(`${key} appears ${result[key]}`)
}

return result
}
console.log(frequency(str))
console.log(frequency('mmmnmneew'))
//{ a: 4, b: 2, c: 1, d: 1 }
//{ m: 4, n: 2, e: 2, w: 1 }

/*a appears 4
b appears 2
c appears 1
d appears 1
{ a: 4, b: 2, c: 1, d: 1 }
m appears 4
n appears 2
e appears 2
w appears 1
{ m: 4, n: 2, e: 2, w: 1 } */