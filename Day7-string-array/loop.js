const fruits = ['mango', 'apple', 'banana']

//for loop
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}

//for of
console.log('----------for of')
for(const ele of fruits){
    console.log(ele)
}

//forEach
console.log('----------forElse')
fruits.forEach(function(ele){
    console.log(ele)
})
