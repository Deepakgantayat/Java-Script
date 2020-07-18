const products = [
    { id: 1, name: 'marker', price: 10, category: 'stationary'},
    { id: 2, name: 'shoe', price: 100, category: 'footwear'},
    { id: 3, name: 'scale', price: 5, category: 'stationary'},
]

function productsByCategory(products, category){
    const result = products.filter(function(name){
        return name.category == category 
    }) 
    return result
}
console.log(productsByCategory(products, 'stationary'))

console.log(productsByCategory(products, 'electronics'))
//[ { id: 1, name: 'marker', category: 'stationary' },
//{ id: 3, name: 'scale', category: 'stationary' } ]
//[]


function productsByPrice(products, price){
    const result = products.filter(function(name){
        return name.price >= price 
    }) 
    return result
}
console.log(productsByPrice(products, 10))

console.log(productsByPrice(products, 5))

//[ { id: 1, name: 'marker', price: 10, category: 'stationary' },
//{ id: 2, name: 'shoe', price: 100, category: 'footwear' } ]
//[ { id: 1, name: 'marker', price: 10, category: 'stationary' },
 // { id: 2, name: 'shoe', price: 100, category: 'footwear' },
  //{ id: 3, name: 'scale', price: 5, category: 'stationary' } ]