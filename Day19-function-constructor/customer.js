function customer(name, acNo, balance){
    this.name = name
    this.acNo = acNo
    this.balance = balance
    this.getCurrentBalance = function(){
        return this.balance
    }
    this.showDetails = function(){
        return `name - ${this.name}, acNo - ${this.acNo}, balance-${this.balance}`
    }
    this.transaction = function(code, amount){
        if(code == 1){
            return this.balance += amount
        }
        else if(balance < amount){
            return 'insuficient fund'
        }
        else{
            return this.balance -= amount
        }
    }
}
const c1 = new customer('gopi', 'SBIN112', 1000)
console.log(c1.transaction(1,500))
console.log(c1.balance)
console.log(c1.transaction(0,500))
console.log(c1.transaction(0,1500))
console.log(c1.getCurrentBalance())
console.log(c1.showDetails())