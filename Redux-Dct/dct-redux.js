const configureStore = ()=>{
    const store = {
        state: {
            count:0
        },
        getState: function(){
            return this.state
        },
        dispatch: function(){
            switch(action.type){
                case 'increament': {
                    this.state.count += 1
                    break
                }
                case 'decreament': {
                    this.state.count -= 1
                    break
                }
                case 'reset': {
                    this.state.count = 0
                    break
                }
                case 'incrimentBy': {
                    this.state.count += action.payload
                    break
                }
                case 'setTo': {
                    this.state.count = action.payload
                }
                default: {
                    this.state.count
                }
            }
        }
    }
    return store
}

const store = configureStore()

console.log(store)
console.log(store.state)
console.log(store.getState())

//increament by 1
//store.state.count += 1
//store.getState().count += 1

//action creators / action generators
const increament = () => {
    return {type : 'increament'}//action
}

const reset = ()=>{
    return {type: 'reset'}
}

const decreament = () =>{
    return { type : 'decreament'}
}

const increamentBy = (num) =>{
    return {type : 'increamentBy', payload:num}
}

const decreamentBy = (num) => {
    return {type: 'decreamnetBy', payload:num}
}

const setTo = (num) =>{
    return {type:'setTo', payload:num}
}

store.dispatch(increament())//{type:'increamnet'} //action -> object
console.log(store.getState())
store.dispatch(reset())
console.log(store.getState())

//decreamnetby 1
store.dispatch(decreament())
console.log(store.getState())

//reset
store.dispatch(reset())
console.log(store.getState())

//increamnet by 10
//store.dispatch('increamentBy',10)
store.dispatch(increamentBy(10))
console.log(store.getState())

//set to 5
store.dispatch(setTo(5))