import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_LOADING, FETCH_CATEGORIES_SUCCESS } from './categoryTypes'
import Axios from 'axios'

export const fetchCategoriesLoading = () => {
    return {
        type: FETCH_CATEGORIES_LOADING
    }
}

export const fetchCategoriesFailure = (error) => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const fetchCategories = () => {
    return async (dispatch) => {
        try{
            dispatch(fetchCategoriesLoading())

            const response = await Axios.get('http://localhost:8083/categories')

            dispatch(fetchCategoriesSuccess(response.data.categories))

        } catch(error){
            dispatch(fetchCategoriesFailure(error.message))
        } 
    }
}
