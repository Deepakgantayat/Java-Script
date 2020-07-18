const students ={
    name: 'kitu',
    gender: 'male',
    city: 'bangalore',
    age: 23,
    details: function(){
        return `name - ${this.name}, gender-${this.gender}, city- ${this.city}, age-${this.age}`
    }
}
console.log(students.details())
//name - kitu, gender-male, city- bangalore, age-23

//write a code which will return only property not function
