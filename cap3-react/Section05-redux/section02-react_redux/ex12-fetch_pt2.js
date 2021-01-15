/* 
    npm install --save axios redux-thunk
*/

/* On store.js, we'll apply thunk as a middleware */
import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import {rootReducer} from './rootReducer'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

/* On user_actions */
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

/* UserContainer.js */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from '../redux/users/user_actions'

const UserContainer = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (  
        <div>
        </div>
    );
}
 
export default UserContainer;

/* 
    Now if we look at the console with logger we can see that the users have been successfully 
    fetched, we can use useSelector to get the users in the component, the error, the loading
    boolean variable, and render our UI accordingly.
*/
