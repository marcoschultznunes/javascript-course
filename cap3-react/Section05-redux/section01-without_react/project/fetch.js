const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = require('redux-logger').createLogger()


// Initial State
initialState = {
    loading: false,
    users: [],
    error: ''
}

// Actions
const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersLoading = () => {
    return {
        type: FETCH_USERS_LOADING
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// The fetch async action
const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersLoading())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(users => {
                const mappedUsers = users.data.map(user => user.id)
                dispatch(fetchUsersSuccess(mappedUsers))
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err.message))
            })
    }
}

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_LOADING: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            users: action.payload,
            loading: false
        }
        case FETCH_USERS_FAILURE: return {
            ...state,
            error: action.payload,
            loading: false
        }
    }
}

// Store
const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware))

store.dispatch(fetchUsers())
