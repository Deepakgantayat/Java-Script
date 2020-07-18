function argsList (n){
console.log(arguments)//which holds all the arguments being passed to the function
for(let i=0; i< arguments.length; i++){
    console.log(i, arguments[i])
}
}
console.log(argsList(10))
console.log(argsList(10,20))
console.log(argsList(10,20,30,40,50))
/*[Arguments] { '0': 10 }
0 10
undefined
[Arguments] { '0': 10, '1': 20 }
0 10
1 20
undefined
[Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50 }
0 10
1 20
2 30
3 40
4 50
undefined */