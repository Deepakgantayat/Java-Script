//properties - name,age
//methods - details

class Person {
    constructor (name,age){
        this.name = name
        this.age = age
    }
    details(){
        return `${this.name} - ${this.age}`
    }
greet(name){
    return 'Hello' + name
}
}
const p1 = new Person('deepak', 24)
console.log(p1)
console.log(p1.details())