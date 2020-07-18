function strcount(str, char) {
    let count = 0       
    for(let i=0; i<str.length; i++){
    if (str[i] == char) {
        count = count + 1
    }
}
return count
}

console.log(strcount('hello', 'o'))
console.log(strcount('hello', 'l'))
console.log(strcount('hello', 'z'))