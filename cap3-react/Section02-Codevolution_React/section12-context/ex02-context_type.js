/*
    There is an alternative way to receive the context, it is only for class components and 
    a component is limited to only one of them, but it provides cleaner code.
*/

/*
    We'll modify the previous example. We need to export default the UserContext, and then
    change the way the ComponentC receives the values. index.js stays the same 
*/


/* userContext.js */
import React from 'react';

const UserContext = React.createContext({
    name: 'Anon', surname: 'Guest'
})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
export default UserContext // Only modified line in userContext.js


/* ComponentC.jsx */
import React, { Component } from 'react';
import UserContext from './userContext';

class ComponentC extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    static contextType = UserContext // The most important line

    // context values are now accessed by this.context
    render() {  
        return (  
            <h3>User {this.context.name} {this.context.surname}</h3>
        );
    }
}
 
export default ComponentC;


/*
    index.js does not change:

    <UserProvider value={{name:"Carlos", surname:"Chincón"}}>
      <ComponentC />
    </UserProvider>
*/