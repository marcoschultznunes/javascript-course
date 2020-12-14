/* useInput.js */
import { useState } from 'react';

const useInput = () => {
    const [inputValue, setInputValue] = useState('')

    const bind = { // Defines the HTML attributes
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value)
    }

    return [inputValue, bind]
}
 
export default useInput;

/*
    useInput.js will create state automatically for each input. It will also bind the value and 
onChange HTML attributes of the input to that state.
*/

/* UserForm.jsx */
import React from 'react';
import useInput from '../../hooks/useInput';

const UserForm = () => {
    const [email, bindEmail] = useInput()
    const [username, bindUsername] = useInput()

    const submitHandler = (e) => {
        // On the form handler we could make a POST request with each input's state.

        e.preventDefault()
        alert(`Email: ${email}; Username: ${username}`)
    }

    return (  
        <div>
            <form action="#" onSubmit={submitHandler}>
                <input 
                    {...bindEmail /* makes value and onChange attributes modify the state */}
                    type="email" 
                    name="email"
                    placeholder="Email"
                /><br/>
                <input 
                    {...bindUsername}
                    type="text" 
                    name="username"
                    placeholder="Username" 
                /><br/>
                <button type="submit" className='bg-blue'>Submit</button>
            </form>
        </div>
    );
}
 
export default UserForm;
