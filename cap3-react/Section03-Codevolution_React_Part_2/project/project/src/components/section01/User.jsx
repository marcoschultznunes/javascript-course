import React, { useState } from 'react';

const User = () => {

    const [state, setState] = useState({name: '', email: '', password: ''})

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