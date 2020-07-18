function removeArrayElements(a,b){
    for (i = 0; i < a.length; i++){
        a.splice(b[i], 1)
    }
}
console.log(removeArrayElements([2, 5, 9, 6], 5));
//output - [2, 9, 6]