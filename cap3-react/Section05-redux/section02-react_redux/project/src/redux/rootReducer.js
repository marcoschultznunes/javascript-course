import {combineReducers} from 'redux'
import {cakeReducer} from './cakes/cake_reducer'
import {iceCreamReducer} from './icecream/icecream_reducer'

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
