var currentInventory = [ {name: "HTC", stock: 25},
{name: "Nokia", stock: 1000}, 
{name: "Samsung", stock: 50},
{name: "Sony", stock: 10},
 {name: "Apple", stock: 15}]

 var newInventory = [ {name: "LG", stock: 5}, 
 {name: "Sony", stock: 10}, 
 {name: "Samsung", stock: 5}, 
 {name: "Apple", stock: 15}]

 function updateInventory(currentInventory, newInventory){
     newInventory.forEach(function(newItem){
         const item = currentInventory.find(function(currentitem){
             return currentitem.name == newItem.name
         })
    if(item){
        item.stock = item.stock + newItem.stock
    }
    else{
        currentInventory.push(newItem)
    }
        })
 return currentInventory
    }
    console.log(updateInventory(currentInventory, newInventory))
    /*[ { name: 'HTC', stock: 25 },
  { name: 'Nokia', stock: 1000 },
  { name: 'Samsung', stock: 55 },
  { name: 'Sony', stock: 20 },
  { name: 'Apple', stock: 30 },
  { name: 'LG', stock: 5 } ] */