import { BUY_CAKE } from "./cake_types"

const initialState = {
    numberOfCakes: 15
}

export const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - action.payload
        }
        default: return state
    }
}

