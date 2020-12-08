/*
    To apply context to function components we just need to change how the context is consumed
on the component receiving the props. The rest stays the same (creating the context, providing 
it, etc.)
*/

/* UserContext.jsx */
import React from 'react';

export const UserContext = React.createContext({name: 'Alberto', surname: 'Martínez'})
export const UserProvider = UserContext.Provider

/* On index.js */
ReactDOM.render(
    <UserProvider value={{name: 'Afonso', surname: 'García'}}>
        <Person />
    </UserProvider>
, document.getElementById('root'))

/* Person.jsx */
import React, {useContext} from 'react'; 
import {UserContext} from './UserContext' // Import the context, not the consumer.

const Person = () => {

    const user = useContext(UserContext) // The values are now assigned to a variable.

    return (  
        <div>
            <h3>Hello, {user.name} {user.surname}!</h3>
        </div>
    );
}
 
export default Person;