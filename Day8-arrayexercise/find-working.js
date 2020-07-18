function findEle(numbers, n){
    let result
    for(let i =0; i<numbers.length; i++){
        if(numbers[i] >= n ){
            result = numbers[i]
            break
        }
    }return result

}
console.log(findEle([10,20,30,40,50], 35))
console.log(findEle([10,20,30,40,50], 300))
//40
//undefined