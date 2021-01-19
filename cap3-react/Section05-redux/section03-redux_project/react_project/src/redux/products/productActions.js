import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from './categoryTypes'
import Axios from 'axios'

export const fetchProductsLoading = () => {
    return {
        type: FETCH_PRODUCTS_LOADING
    }
}

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProductsSuccess = (PRODUCTS) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: PRODUCTS
    }
}

export const fetchProducts = () => {
    return async (dispatch) => {
        try{
            dispatch(fetchProductsLoading())

            const response = await Axios.get('http://localhost:8083/products')

            dispatch(fetchProductsSuccess(response.data.products))

        } catch(error){
            dispatch(fetchProductsFailure(error.message))
        } 
    }
}
