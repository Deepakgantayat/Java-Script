
//function1
function success(n){
    console.log('success', n)
}

//function 2
function failure(n){
    console.log('failure', n)
}

//main function
function generateRandom(success, failure){
    console.log(success, failure)
    setTimeout(()=>{
        const random = Math.round(Math.random()*10)
        if(random % 2==0){
            success(random)
        }
        else{
            failure(random)
        }
    },5000)
}

//generateRandom is taking functions as arguments, we want to execute function at a later point in line
//call back functions

//passing function as argument
//generateRandom(success, failure)

//where we are defining the function inline
generateRandom(function(n){
    console.log('success', n)
}, function(n){
    console.log('failure', n)
})

/* 
function success(response){
    const users = response.data
    console.log(users)
}

function failure(response){
    const err = response.data.message
    console.log(err)
}
axios.get('url)
.then(success)
.catch(failure)


*/