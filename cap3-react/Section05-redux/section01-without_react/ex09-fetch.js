/*
    In this example we'll fetch data using redux.

    Due to data fetching being asynchronous, we'll need another package called thunk.
        npm i --save redux-thunk
*/

/*
    The state will have 3 attributes:
        - loading
        - data
        - error
*/

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

/* The reducer */
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

/* The fetch async action */
const fetchUsers = () => {

    /* 
        Thunk allows us to access the dispatch inside the action, it also allows us to return 
        a function instead of an object. The API will be fetched and then, the dispatch function
        will be called passing the according to the result of the fetch.
    */
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
