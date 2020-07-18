class Product{
    constructor (name,price){
        this.name = name
        this.price = price
    }
    details(){
        return `${this.name} - INR ${this.price}`
    }
}
const p1 = new Product('marker', 125)
console.log(p1)
console.log(p1.details())
//properties- name,price,model
//methods-

class Mobile extends Product{
    constructor(name,price,model){
    super(name,price)
    this.model = model
    }
}
const m1 = new Mobile('iphone', 125, 'apple')
console.log(m1)
console.log(m1.details())