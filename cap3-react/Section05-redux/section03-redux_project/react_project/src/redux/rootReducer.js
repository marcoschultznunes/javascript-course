import { categoryReducer } from './categories/categoryReducer'
import { productReducer } from './products/productReducer'
import { combineReducers } from 'redux'
import { userReducer } from './users/userReducer'

export const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    user: userReducer
})
