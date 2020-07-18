//fix-3 using  es6 arrow function

const person = {
    name: 'rakesh',
    skills: ['js', 'rb', 'py'],
    details: function(){ //if we use arrow function here it will return empty object bcz it refer ouside 
        this.skills.forEach((skill)=>{
            console.log(`${this.name} knows ${this.skill}`)
        })
    }
}
person.details()