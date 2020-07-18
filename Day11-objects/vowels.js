//count number of occuranvces of each of the vowel in a string


function countVowels(str){
    const result= { a:0, e:0, i:0, o: 0, u:0 }

    for (let i= 0; i< str.length; i++){
        if(result.hasOwnProperty(str[i])){
            result[str[i]] += 1
        }
    }
    return result
}
console.log(countVowels('terminaator')) //{ a: 2, e: 1, i: 1, o: 1, u: 0 }