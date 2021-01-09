// Actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_PASTRY = 'BUY_PASTRY'

const buyCake = () => { 
    return {
        type: BUY_CAKE
    }
}

const buyPastry = () => {
    return {
        type: BUY_PASTRY
    }
}

// Initial State
const initialCakeState = {
    numOfCakes: 8
}

const initialPastryState = {
    numOfPastries: 12
}

// Reducers
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case 'BUY_CAKE': return {
            ...state, 
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const pastryReducer = (state = initialPastryState, action) => {
    switch(action.type){
        case 'BUY_PASTRY': return {
            ...state,
            numOfPastries: state.numOfPastries - 1
        }
        default: return state
    }
}

// Store
const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const applyMiddleware = redux.applyMiddleware
const combineReducers = redux.combineReducers
const createStore = redux.createStore

const rootReducer = combineReducers({
    cake: cakeReducer,
    pastry: pastryReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

// Main
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyPastry())
store.dispatch(buyPastry())
store.dispatch(buyCake())
