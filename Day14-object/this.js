console.log(this) // {}

function showThis(){
    console.log(this) //refer to global object
}

const person = {
    name: 'kitu',
    details: function(){
        return this
    },
    showMeThs: function(){
        //console.log(this) // refer to current object//lexical scoping//
    function printThis(){
        console.log(this)// global object//windows object
    }
    printThis()
    }
}
console.log(person.details())