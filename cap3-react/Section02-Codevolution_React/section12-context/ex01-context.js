/*
    Context is used for when we want to pass props to a deeper component in the React 
    tree, without having to pass the props through each of its parent components.
*/

/* We'll create 3 components where each of them is the children of the other. ComponentA,
ComponentB and ComponentC */

// ComponentA
import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <ComponentB />
        );
    }
}
 
export default ComponentA;

// ComponentB
import React, { Component } from 'react';
import ComponentC from './ComponentC';

class ComponentB extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <ComponentC />
        );
    }
}
 
export default ComponentB;

// ComponentC
import React, { Component } from 'react';

class ComponentC extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div></div>
        );
    }
}
 
export default ComponentC;


/* First, we need a context file, which exports a provider and a consumer function */
import React from 'react';

const UserContext = React.createContext({
    name: 'Anon', surname: 'guest'
}) // The param assigns a default value

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer


/* Then, where we need to wrap where we place the component (index.js in this case) with
the provider tag, assigning the passed props as attributes */
ReactDOM.render(
    <React.StrictMode>

        <UserProvider value={{name: "Carlos", surname: "Chincón"}}>
            <ComponentC />
        </UserProvider>
    
        <ComponentC /> {/* Will use the default value, as this one doesn't have a provider */}

    </React.StrictMode>,
    document.getElementById('root')
);


/* The ComponentC.jsx */
import { UserConsumer } from './userContext';

class ComponentC extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <UserConsumer>
                {
                    (values) => {
                        console.log(values)
                        return <h3>User {values.name} {values.surname}</h3>
                    }
                }
            </UserConsumer>
        );
    }
}
 
export default ComponentC;