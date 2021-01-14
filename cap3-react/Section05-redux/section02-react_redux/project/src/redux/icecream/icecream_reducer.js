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
