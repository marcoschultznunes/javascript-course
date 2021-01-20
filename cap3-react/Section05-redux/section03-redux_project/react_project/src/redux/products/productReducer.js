import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from './productTypes'

const initialState = {
    products: [],
    loading: false,
    error: ''
}

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_LOADING: return {
            ...state,
            products: [],
            loading: true,
            error: ''
        }
        case FETCH_PRODUCTS_FAILURE: return {
            ...state,
            products: [],
            loading: false,
            error: action.payload
        }
        case FETCH_PRODUCTS_SUCCESS: return {
            ...state,
            products: action.payload,
            loading: false,
            error: ''
        }
        default: return state
    }
}
