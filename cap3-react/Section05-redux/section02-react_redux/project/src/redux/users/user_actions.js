import {FETCH_USERS_LOADING, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './user_types'
import Axios from 'axios'

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

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersLoading())

        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch(fetchUsersSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchUsersFailure(err.message))
        })
    }
}
