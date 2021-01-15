/* user_types */
export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

/* user_actions */
import {FETCH_USERS_LOADING, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './user_types'

export const fetchUsersLoading = () => {
    return {
        type: FETCH_USERS_LOADING
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

/* user_reducer */
import {FETCH_USERS_LOADING, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './user_types'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_USERS_LOADING: return {
            ...state,
            loading: true,
            users: []
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload,
        }
        default: return state
    }
}


/* rootReducer */
import {combineReducers} from 'redux'
import {cakeReducer} from './cakes/cake_reducer'
import {iceCreamReducer} from './icecream/icecream_reducer'
import {userReducer} from './users/user_reducer'

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})
