const students ={
    name: 'kitu',
    gender: 'male',
    city: 'bangalore',
    age: 23,
    details: function(){
        return `name - ${this.name}, gender-${this.gender}, city- ${this.city}, age-${this.age}`
    },
    getProperty : function(){
        const result = []
        const array = Object.values(students)
        for(let i=0; i<array.length; i++){
            if(typeof this.array[i] == 'string'){
                result.push[i]
 }
 return result
}    
     
}
}

console.log(students.getProperty())

