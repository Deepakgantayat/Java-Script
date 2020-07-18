//{}- object literal
//new object()- object constructor
//methods help to perform action inside an object

const person ={
    name: 'deepak',
    details : function(){
        return 'The name of the person' + this.name
    },
    //return this - it will refer to the current object-inspite of the name of the object
        //we can use this method also when the name of the object changes
    //method is taking arguments
    greet: function(greetName){
        return `hi ${greetName} my name is ${this.name}`
    }
}
console.log(person.name) //'deepak'
console.log('person', person.details)
console.log(person.greet('kitu'))//hi kitu my name is deepak
// const players ={
//     name: 'deepak',
//     details: function(){
//         return this
//     }
// }
//console.log('players', players.details())
//players { name: 'deepak', details: [Function: details] }