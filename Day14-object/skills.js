//fix-1 assign'this' to another variable inside the method

// const person ={
//     name: 'kitu',
//     skills: ['js','rb','py' ],
//     details: function(){
//         const that = this
//         this.skills.forEach(function(skill){
//             console.log(`${that.name} knows ${skill}`)
//         })
//     }
// }


//fix2- use the bind method, to set the value of this keyword inside the function
//any argument passed to bind method, willbecome the valueof the this keyword
const person ={
    name: 'kitu',
    skills: ['js','rb','py' ],
    details: function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        }.bind(this))
    }
}
person.details()
/*kitu knows js
kitu knows rb
kitu knows py */