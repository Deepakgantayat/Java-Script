//all primitive data types are pass by value

const name = 'dct'
function changeName(name){
    name = 'dct academy'
    return name
}
console.log(changeName(name))//dct academy
console.log(name)//dct