import { 
    LOGIN_LOADING, LOGIN_FAILURE, LOGIN_SUCCESS,
    SIGNUP_LOADING, SIGNUP_FAILURE, SIGNUP_SUCCESS
} from './userTypes'

const initialState = {
    user: {},
    loading: false,
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_LOADING: return {
            ...state,
            user: {},
            loading: true,
            error: ''
        }
        case LOGIN_FAILURE: return {
            ...state,
            user: {},
            loading: false,
            error: action.payload
        }
        case LOGIN_SUCCESS: return {
            ...state,
            user: action.payload,
            loading: false,
            error: ''
        }
        case SIGNUP_LOADING: return {
            ...state,
            user: {},
            loading: true,
            error: ''
        }
        case SIGNUP_FAILURE: return {
            ...state,
            user: {},
            loading: false,
            error: action.payload
        }
        case SIGNUP_SUCCESS: return {
            ...state,
            user: {},
            loading: false,
            error: ''
        }
        default: return state
    }
}
