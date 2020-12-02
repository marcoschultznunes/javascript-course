/*
    In the last example, we saw a state which was composed of a single variable. In this 
example, the state will be an object.

    We must now remember one of the peculiarities of useState, which states that 
        " Every time we use setState, it does not keep the previous values, we must pass the
        previous state as a spread operator to the new state. "

    This will be applied in this example, as we need to pass the other attributes when changing 
    only 1 attribute of the state.
*/


/* User.jsx */
import React, { useState } from 'react';

const User = () => {

    /* Initializing state */
    const [state, setState] = useState({name: '', email: '', password: ''})

    /* Here we pass the spread ...state to keep the other values in the state */
    const newValue = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (  
        <div>
            <form action="">
                <h2>Name: {state.name}</h2>
                <h2>Email: {state.email}</h2>
                <h2>Password: {state.password}</h2>

                <input type="text" placeholder="Full Name" name='name'
                    onChange={newValue} value={state.name}/><br/>

                <input type="email" placeholder="Email" name='email'
                    onChange={newValue} value={state.email}/><br/>

                <input type="password" placeholder="Password" name='password'
                    onChange={newValue} value={state.password}/><br/>
            </form>
        </div>
    );
}
 
export default User;

/*
    Notice how we stopped using the this keyword, making our code more concise and less prone
    to logical errors
*/