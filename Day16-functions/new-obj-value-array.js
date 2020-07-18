const arr1 = [10,20]

//const arr2 with values of arr1 but arr2 needs to independent of arr1
//es5
const arr2 =[].concat(arr1)
console.log(arr1,arr2)//[ 10, 20 ] [ 10, 20 ]

arr1.push(30)
console.log(arr1,arr2)//[ 10, 20, 30 ] [ 10, 20 ]

arr2.push(40)
console.log(arr1,arr2)//[ 10, 20, 30 ] [ 10, 20, 40 ]

const arr3 = arr1.slice(0)
console.log(arr1,arr2,arr3)//[ 10, 20, 30 ] [ 10, 20, 40 ] [ 10, 20, 30 ]

arr3.push(50)
console.log(arr1,arr2,arr3)//[ 10, 20, 30 ] [ 10, 20, 40 ] [ 10, 20, 30, 50 ]

//es6-spread operator
const arr4 = [...arr2]
console.log(arr1,arr2,arr3,arr4)//[ 10, 20, 30 ] [ 10, 20, 40 ] [ 10, 20, 30, 50 ] [ 10, 20, 40 ]
arr4.push(60)
console.log(arr1,arr2,arr3,arr4)//[ 10, 20, 30 ] [ 10, 20, 40 ] [ 10, 20, 30, 50 ] [ 10, 20, 40, 60 ]
