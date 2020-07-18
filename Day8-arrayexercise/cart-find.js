const cart =[]

function addToCart(cart, product){
    if(cart.length == 0){
        cart.push(product)
    }
    else{
        const cartItem = cart.find (function (item){
return item.id == product.id
        })

        if(cartItem){
            cartItem.quantity = cartItem.quantity + product.quantity
        }
        else{
            cart.push(product)
        }
    }
    return cart
}

console.log('first', addToCart(cart, { id: 1, name: 'marker', quantity: 1, price:10})) //first [ { id: 1, name: 'marker', quantity: 1, price: 10 } ]
console.log('second', addToCart(cart, { id: 1, name: 'marker', quantity: 1, price:10}))//second [ { id: 1, name: 'marker', quantity: '[object Object]1', price: 10 } ]
console.log('third', addToCart(cart, { id: 2, name: 'scale', quantity: 1, price:5}))
//third [ { id: 1, name: 'marker', quantity: '[object Object]1', price: 10 },
//{ id: 2, name: 'scale', quantity: 1, price: 5 } ]