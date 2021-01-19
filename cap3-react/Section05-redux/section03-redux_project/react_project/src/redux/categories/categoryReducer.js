import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_LOADING, FETCH_CATEGORIES_SUCCESS } from './categoryTypes'

const initialState = {
    categories: [],
    loading: false,
    error: ''
}

export const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CATEGORIES_LOADING: return {
            ...state,
            categories: [],
            loading: true,
            error: ''
        }
        case FETCH_CATEGORIES_FAILURE: return {
            ...state,
            categories: [],
            loading: false,
            error: action.payload
        }
        case FETCH_CATEGORIES_SUCCESS: return {
            ...state,
            categories: action.payload,
            loading: false,
            error: ''
        }
        default: return state
    }
}
