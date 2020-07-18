//person - property - name, age, gender
//methods - details

//constructor function - Object prototype function
function Person(name, age){
    this.name =  name
    this.age = age
    this.details = function(){
        return `${this.name} (${this.age})`
    }
    this.greet = function(){
        return `Hi my name is ${this.name}`
    }
}

const p1 = new Person('ani', 24)
console.log(p1)
console.log(p1.name, p1.age)
console.log(p1.details())
console.log(p1.greet())

const p2 = new person('kitu', 23)
console.log(p2)
console.log(p2.name, p1.age)
console.log(p2.details())
console.log(p2.greet())
p2.age = 25

const p3 = new person('deepak', 23)
console.log(p3.details())
console.log(p3.greet())

//const p = new person()
//console.log(p1)
//new Array() || new Object()

