//propertis- name, age
//method - details
function Person(name,age){
    this.name = name
    this.age = age
    this.details = function(){
        return `${this.name} - ${this.age}`
    }
}
const p1 = new Person('kitu', 21)
console.log(p1)
console.log(p1.details())
