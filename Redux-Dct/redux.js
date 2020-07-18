//npm init -y
//npm install redux

//console.log(require('redux))
const {createStore, combineReducers} =require('redux')

//reducers are regular function
const countReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREAMENT' : {
            return state + 1
        }
        case 'DECREAMENT' : {
            return state - 1
        }
        case 'RESET' : {
            return 0
        }
        case 'INCREAMENT_BY' : {
            return state + action.payload
        }
        default : {
            return state
        }
        
    }
    
}

//action generator
const increament = () =>{
    return {type: 'INCREAMENT'}
}
const decreament = () =>{
    return {type : 'DECREAMENT'}
}
const reset = () =>{
    return {type: 'RESET'}
}
const increamentby = (n) => {
    return {type : 'INCREAMENT_BY', payload: n}
}

//employee reducer
const employeesInitialState = []
employeesReducer = (state = employeesInitialState, action) => {
    switch(action.type){
        case 'ADD_EMPLOYEE':{
            return state.concat(action.payload)
        }
        case 'UPDATE_EMPLOYEE':{
            return state.map(emp =>{
                if(emp.id ==action.payload.id){
                    return Object.assign({},emp,action.payload.obj)
                }else{
                    return Object.assign({}, emp)
                }
            })
        }
        case 'REMOVE_EMPLOYEE': {
            return state.filter(emp => emp.id != action.payload)
        }
        default : {
            return state
        }
    }
}

const userInitialState = {}
const userReducer = (state = userInitialState, action) => {
    switch(action.type){
        case 'LOGIN_USER' :{
            return action.payload
        }
    case 'LOGOUT_USER' : {
        return {}
        }
        default : {
            return state
        }
    }   
}

//user action generator
const loginUser = (user) =>{
    return {
        type : 'LOGIN_USER', payload: user
    }
}
const logoutUser= () => {
    return {
        type: 'LOGOUT_USER'
    }
}
//action generator for employees
const addEmployee = (employee) =>{
    return {type: 'ADD_EMPLOYEE', payload: employee}
}
const removeEmployee = (id) => {
    return {type:'REMOVE_EMPLOYEE', payload: id}
}
const updateEmployee = (id,obj) =>{
    return {
        type: 'UPDATE_EMPLOYEE',
        payload: {
            id,
            obj
        }
    }
}

const configureStore = () => {
    const store = createStore(combineReducers({
        count : countReducer,
        employees: employeesReducer,
        user: userReducer

    }))
    return store
}
const store = configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})

// store.dispatch(increament())
// store.dispatch(increament())
// store.dispatch(decreament())
// store.dispatch(reset())
// store.dispatch(increamentby(5))

//create operator
store.dispatch(addEmployee({id:1, name: 'emp1'}))
store.dispatch(addEmployee({id:2, name:'emp2'}))

//update employee
store.dispatch(updateEmployee(1,{name:'employee1'}))

//remove employees
store.dispatch(removeEmployee(2))

//list employees
console.log('show all employees', store.getState().employees)

//get 1 employee
console.log('show id 1', store.getState().employees.find(emp => emp.id == 1))

//LOGIN USER
store.dispatch(loginUser({id:1, name: 'user1', email: 'user1@gmail.com'}))

//LOGOUT user
store.dispatch(logoutUser())