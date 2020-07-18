function chop(str, len){
    if(len == undefined){
        return [str]
    }
    const result = []
    for(i = 0; i<str.length; i = i+ len){
        const chopStr = str.slice(i, i+len)
        result.push(chopStr)

    }
    return result
}

console.log(chop('resource', 2))
console.log(chop('resource', 3))
console.log(chop('resource'))
/*[ 're', 'so', 'ur', 'ce' ]
[ 'res', 'our', 'ce' ]
[ 'resource' ]
 */