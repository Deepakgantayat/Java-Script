function generateRandom(){
    return  new Promise(function(resolve, reject){
        setTimeout(() => {
            const random = Math.round(Math.random()*10)
            if(random % 2 == 0){
                resolve(random)
            }
            else{
                reject(random)
            }
        },2000)
    })
}
generateRandom()
.then(function(n){
    console.log('success', n)
})
.catch(function(n){
    console.log('failure', n)
})

/*
axios.get()
.then(function(response) => {

})

.catch(function(err) => {
    
})

*/