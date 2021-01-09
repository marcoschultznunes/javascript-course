/*
    You can have more than one reducer by using a function called combineReducers() from the
    redux library.
    
    Each reducer will have its own initial state.
*/

/* The two actions */
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

/* The two initial states */
const initialCakeState = {
    numOfCakes: 8
}

const initialPastryState = {
    numOfPastries: 12
}

/* The two reducers */
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case 'BUY_CAKE': return {
            ...state, /* We now need to use spread to pass the other state attributes */
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const pastryReducer = (state = initialPastryState, action) => {
    switch(action.type){
        case 'BUY_PASTRY': return {
            ...state, /* We now need to use spread to pass the other state attributes */
            numOfPastries: state.numOfPastries - 1
        }
        default: return state
    }
}

/*
    Now we need the function to combine reducers
*/
const redux = require('redux')
const combineReducers = redux.combineReducers
const createStore = redux.createStore

const rootReducer = combineReducers({
    cake: cakeReducer,
    pastry: pastryReducer
})

const store = createStore(rootReducer)

// Subscribe stays the same
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))

console.log('Initial State', store.getState())

// The dispatches:
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyPastry())
store.dispatch(buyPastry())
store.dispatch(buyCake())
unsubscribe()

/*   
    The console:
        Initial State { cake: { numOfCakes: 8 }, pastry: { numOfPastries: 12 } }
        Updated State { cake: { numOfCakes: 7 }, pastry: { numOfPastries: 12 } }
        Updated State { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 12 } }
        Updated State { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 11 } }
        Updated State { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 10 } }
        Updated State { cake: { numOfCakes: 5 }, pastry: { numOfPastries: 10 } }
*/
