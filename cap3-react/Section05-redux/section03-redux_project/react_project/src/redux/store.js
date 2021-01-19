import { applyMiddleware, createStore } from 'redux'
import { categoryReducer } from './categories/categoryReducer'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(categoryReducer, applyMiddleware(logger, thunk))
