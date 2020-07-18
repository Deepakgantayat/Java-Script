function numberformat(numbers){
    const firstpart = numbers.slice(0,3)
    const secondpart = numbers.slice(3,6)
    const thirdpart = numbers.slice(6)

    //return '(' + firstpart + ')' + ' ' +secondpart + '-' + thirdpart
    //es6-templet literal/ templet string
    return `(${firstpart}) ${secondpart}-${thirdpart}`
}

console.log(numberformat('9999999999'))
console.log(numberformat('1234567890'))