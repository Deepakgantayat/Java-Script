function fizzbuzz(max){
    //print 1-100
    //if n is divisible by 3- fizz
    //if the number divisible ny 5- buzz
    //divisible by both 3 and 5 - fizzbuzz
    //else return n   
    
    
    
    for(let i =0; i<=max; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
           console.log('fizzbuzz')
        } else if( i % 3 ==0){
        console.log('fizz')
        }   else if( i % 5 ==0){
        console.log('buzz')
        }   else{
        console.log(i)
        }
    }
}
fizzbuzz(100)