function show(n1,n2){
 console.log(n1,n2)
}

show()//if less argument are passed, the balance parameters will be undefined
show(10)//we assign value for n1 so n1 will be 10 but n2 will be undefined
show(10,20)//10,20//we pass value for both n1 and n2
show(10,20,30)//10,20//extra argument are ignored as we have declared only n1 and n2

//incase of assigning values to 2nd argument
show(undefined, 20)//undefined, 20