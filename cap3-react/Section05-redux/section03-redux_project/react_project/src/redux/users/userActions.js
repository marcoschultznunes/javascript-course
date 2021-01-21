import { 
    LOGIN_LOADING, LOGIN_FAILURE, LOGIN_SUCCESS, 
    SIGNUP_LOADING, SIGNUP_FAILURE, SIGNUP_SUCCESS 
} from './userTypes'

import Axios from 'axios'

export const loginLoading = () => {
    return {
        type: LOGIN_LOADING
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginAction = (user) => {
    return async (dispatch) => {
        try{
            dispatch(loginLoading())

            const {email, password} = user

            const response = await Axios.post('http://localhost:8083/auth/login', {
                email, password
            })

            dispatch(loginSuccess(response.data))

        } catch(error){
            if(error.response.status === 422){
                return dispatch(loginFailure(error.response.data.errors[0].msg))
            }
            dispatch(loginFailure(error.response.data.message))
        } 
    }
}

export const signupLoading = () => {
    return {
        type: SIGNUP_LOADING
    }
}

export const signupFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        payload: error
    }
}

export const signupSuccess = () => {
    return {
        type: SIGNUP_SUCCESS
    }
}

export const signUpAction = (user) => {
    return async (dispatch) => {
        try{
            dispatch(signupLoading())

            const {email, password, name, surname} = user

            const response = await Axios.post('http://localhost:8083/auth/signup', {
                email, password, name, surname
            })

            dispatch(signupSuccess(response.data))

        } catch(error){
            if(error.response.status === 422){
                return dispatch(signupFailure(error.response.data.errors[0].msg))
            }
            dispatch(signupFailure(error.response.data.message))
        } 
    }
}
