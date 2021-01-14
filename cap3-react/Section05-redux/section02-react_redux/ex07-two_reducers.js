/*
    We'll now add the ice creams to the redux project, adding a new state property and 
    a new reducer
*/

/* ice cream types */
export const BUY_ICECREAM = 'BUY_ICECREAM'

/* ice cream actions */
import { BUY_ICECREAM } from "./icecream_types";

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

/* ice cream reducer */
import { BUY_ICECREAM } from "./icecream_types"

const initialState = {
    numberOfIceCream: 9
}

export const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
        }
        default: return state
    }
}

/* 
    On the next example, we'll combine the 2 reducers.
*/
