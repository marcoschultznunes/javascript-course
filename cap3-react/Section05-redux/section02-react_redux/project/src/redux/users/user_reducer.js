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
