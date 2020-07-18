const menu = [
    { id: 1, name: 'aloo tikki', isVeg: true},
    { id: 2, name: 'veg burger', isVeg: true},
    { id: 3, name: 'chicken burger', isVeg: false},
    { id: 4, name: 'roasted chicken burger', isVeg: false},
]

function isVegFilter(menu){
    const result = menu.filter(function(item){
        return item.isVeg 
    })
    return result
}
console.log(isVegFilter(menu))