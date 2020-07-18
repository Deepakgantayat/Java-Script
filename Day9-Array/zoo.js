const zooInventory = [
    ["king kong", ["gorilla", 42]],
    ["nemo", ["fish", 5]],
    ["phil", ["groundhog", 11]]
]

// console.log(zooInventory.length) // 2
// console.log(zooInventory[0])
// console.log(zooInventory[0].length) //2
// console.log(zooInventory[0][0]) //"king kong"
// console.log(zooInventory[0][1])
// console.log(zooInventory[0][1].length)
// console.log(zooInventory[0][1][0])//'gorila'
// console.log(zooInventory[0][1][1])//'42'

function inventory(zooInventory){
    const result = []
    for(let i = 0; i< zooInventory.length; i++){
        result.push(`${zooInventory[i] [0]} the ${zooInventory[i] [1] [0]} is ${zooInventory [i][1][1]}`)
    }
    return result
}
console.log(inventory(zooInventory))
/* [ 'king kong the gorilla is 42',
  'nemo the fish is 5',
  'phil the groundhog is 11' ]

 */