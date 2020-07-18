function findindex(str, char){
    let index 
    for(let i=0; i<str.length; i++){
    if(str[i]==char){
        index = i
        break

        }
    }return index
}
console.log(findindex('dctacademy' , 'a'))
console.log(findindex('dctacademy' , 'z'))



function findindexes(str, char){
    const indexes = []
    for(let i=0; i<str.length; i++){
    if(str[i]==char){
        indexes = indexes.push(i)
        }
    }return indexes
}
console.log(findindex('dctacademy' , 'a'))
console.log(findindex('dctacademy' , 'z'))