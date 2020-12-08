import React, {useContext} from 'react';
import {UserContext} from './UserContext'

const Person = () => {

    const user = useContext(UserContext)

    return (  
        <div>
            <h3>Hello, {user.name} {user.surname}!</h3>
        </div>
    );
}
 
export default Person;