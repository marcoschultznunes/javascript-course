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