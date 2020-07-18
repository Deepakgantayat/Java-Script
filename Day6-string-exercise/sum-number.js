const str = '12dct234acc'

function findsum(str) {
    let sum = 0
    for( let i = 0; i<str.length; i++){

        const value = parseInt(str[i])
    if( !Number.isNaN(value)){
        sum = sum + value
        }
    } return sum
}

console.log(findsum(str))
console.log(findsum('dct123'))