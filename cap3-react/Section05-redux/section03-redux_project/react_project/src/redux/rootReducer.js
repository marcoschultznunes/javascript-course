import { categoryReducer } from './categories/categoryReducer'
import { combineReducers } from 'redux'
import { userReducer } from './users/userReducer'

export const rootReducer = combineReducers({
    category: categoryReducer,
    user: userReducer
})
