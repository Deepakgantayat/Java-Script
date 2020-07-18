const lineItem = {
    quantity : 1,
    name: 'maker',
    price: 10,
    seller: 'dct',
    maxCount: 2,
    isFlipkAssured: true,
    increament: function(){
        if(this.quantity < this.maxCount ){
            this.quantity +=1
            return this.quantity
        }
        else{
            return `you can not buy more than ${this.maxCount}`
        }   
    },
    decreament: function(){
        if(this.quantity >1){
            return  this.quantity -= 1
    }
    else{
        return this.quantity
    }
    }
    }
console.log(lineItem)
console.log(lineItem.increament())
console.log(lineItem)
console.log(lineItem.decreament())
console.log(lineItem)
console.log(lineItem.increament())
console.log(lineItem.increament())
console.log(lineItem.increament())
console.log(lineItem.increament())
/*{ quantity: 1,
  name: 'maker',
  price: 10,
  seller: 'dct',
  maxCount: 2,
  isFlipkAssured: true,
  increament: [Function: increament],
  decreament: [Function: decreament] }
2
{ quantity: 2,
  name: 'maker',
  price: 10,
  seller: 'dct',
  maxCount: 2,
  isFlipkAssured: true,
  increament: [Function: increament],
  decreament: [Function: decreament] }
1
{ quantity: 1,
  name: 'maker',
  price: 10,
  seller: 'dct',
  maxCount: 2,
  isFlipkAssured: true,
  increament: [Function: increament],
  decreament: [Function: decreament] }
2
you can not buy more than 2
you can not buy more than 2
you can not buy more than 2 */