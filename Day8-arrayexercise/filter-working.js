function findAllEle(numbers){

const result = []
for(i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0){
        result.push(numbers[i])
    }
}
return result

}
console.log(findAllEle([10,20,30,40,55]))
console.log(findAllEle([11,21,31,41,55]))
//[ 10, 20, 30, 40 ]
//[]