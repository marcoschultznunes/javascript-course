import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import {cakeReducer} from './cakes/cake_reducer'

export const store = createStore(cakeReducer, applyMiddleware(logger))
