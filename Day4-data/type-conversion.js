const n1 = '10', n2 = '20', n3 = '12.4'

console.log(n1 + n2) // 1020

//convert string to number
console.log(parseint(n1) + parseint(n2)) //30
console.log(Nmuber(n1) + Number(n2)) //30

console.log(typeof n1, typeof parseint(n1), typeof Number(n1) ) //string, number, number
console.log(parseint(n3)) //12
console.log(parsefloat(n3)) //12.4
console.log(Number(n3)) //12.4

//convert from number tostring

const m1 = 10, m2 = 15.5
console.log(String(m1)) //'10'
console.log(typeof m1)  //number
console.log(typeof String(m1)) //'10'

console.log('' = m1) //'10'