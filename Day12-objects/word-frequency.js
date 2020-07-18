const words = 'virat virat sachin dhoni virat'

function frequency(str){
 const result = {}
 const words = str.split(' ')
 words.forEach(function(word){
     if(result.hasOwnProperty(word)){
         result[word] += 1
     }
     else{
         result[word] = 1
     }
 })
 return result
}
console.log(frequency(words)) //{ virat: 3, sachin: 1, dhoni: 1 }