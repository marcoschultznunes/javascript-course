import { categoryReducer } from './categories/categoryReducer'
import { productReducer } from './products/productReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer
})
