/*
    First we'll make an initial state object
*/
const initialState = {
    numOfCakes: 8
}

/*
    We'll pass this object to the reducer as a default value to the state param.
    
    A reducer function has 2 params:
        1 - state
        2 - action

    We'll pass the action from the previous example.

    The Reducer function returns the new state value.
*/

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'BUY_CAKE': return {
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}


