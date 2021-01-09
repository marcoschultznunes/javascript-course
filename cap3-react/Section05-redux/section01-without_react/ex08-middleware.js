/*
    We can add middlewares to redux, such as logging.

    This is a good reason to why redux is still used.
*/

/*
    To add logging, we'll install it with npm:
        npm install --save redux-logger
*/

/* On index.js */
const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

/*  
    In order to apply the middleware we need a function from the redux library called 
    applyMiddleware, which is passed to the second parameter of the createStore
*/
const applyMiddleware = redux.applyMiddleware

const store = createStore(rootReducer, applyMiddleware(logger))

/*
    The console:
        action BUY_CAKE @ 16:05:14.688
            prev state { cake: { numOfCakes: 8 }, pastry: { numOfPastries: 12 } }
            action     { type: 'BUY_CAKE' }
            next state { cake: { numOfCakes: 7 }, pastry: { numOfPastries: 12 } }
        action BUY_CAKE @ 16:05:14.703
            prev state { cake: { numOfCakes: 7 }, pastry: { numOfPastries: 12 } }
            action     { type: 'BUY_CAKE' }
            next state { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 12 } }
        action BUY_PASTRY @ 16:05:14.704
            prev state { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 12 } }
            action     { type: 'BUY_PASTRY' }
            next state { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 11 } }
        action BUY_PASTRY @ 16:05:14.705
            prev state { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 11 } }
            action     { type: 'BUY_PASTRY' }
            next state { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 10 } }
        action BUY_CAKE @ 16:05:14.705
            prev state { cake: { numOfCakes: 6 }, pastry: { numOfPastries: 10 } }
            action     { type: 'BUY_CAKE' }
            next state { cake: { numOfCakes: 5 }, pastry: { numOfPastries: 10 } }
*/
