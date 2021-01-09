/*
    Now, to have a state/store which makes available the getState, the dispatch, and the 
    subscribe function, we finally need to import redux and use its createStore function.
*/
const redux = require('redux')
const createStore = redux.createStore

// The createStore function's first parameter is the reducer.
const store = createStore(reducer)

/* Subscribe => Callback which triggers on every state update. Returns an unsuscribe function. */
const unsubscribe = store.subscribe(() => console.log('Updated State' + store.getState()))

// Dispatch receives the action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()


/*
    The console:
        Initial State { numOfCakes: 8 }
        Updated State { numOfCakes: 7 }
        Updated State { numOfCakes: 6 }
        Updated State { numOfCakes: 5 }
*/
