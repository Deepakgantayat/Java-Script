// function hashTag(str) {
//     let result = '#'
//     const words = str.split(' ')
//     for(let i = 0; i< words.length; i++){
//         result = result + word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase
//         }return result
// }
// console.log(hashTag('full stack developer'))
// console.log(hashTag('hello world'))



function hashTag(str) {
    let result = '#'
    const words = str.split(' ')
    for(const word of words){
        result = result + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase
        }return result
}

console.log(hashTag('full stack developer'))
console.log(hashTag('hello world'))
