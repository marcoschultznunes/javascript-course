import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))
