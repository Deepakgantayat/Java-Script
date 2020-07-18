const str ='i.like.this.program.very.much'

function reverseWords(str){
    return str.split('.').reverse().join('.')
}

console.log(reverseWords(str)) //much.very.program.this.like.i