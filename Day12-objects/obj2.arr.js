const colors = {
    white : 'peace',
    green : 'prosperity'
}
function obj2arr(colors){
    const result = []
    for(const key in colors){
        result.push([key, colors[key]])
    }
    
        return result
    }
console.log(obj2arr(colors)) //[ [ 'white', 'peace' ], [ 'green', 'prosperity' ] ]


