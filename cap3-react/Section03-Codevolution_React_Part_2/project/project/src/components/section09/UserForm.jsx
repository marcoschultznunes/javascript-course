import React from 'react';
import useInput from '../../hooks/useInput';

const UserForm = () => {
    const [email, bindEmail] = useInput()
    const [username, bindUsername] = useInput()

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Email: ${email}; Username: ${username}`)
    }

    return (  
        <div>
            <form action="#" onSubmit={submitHandler}>
                <input 
                    {...bindEmail}
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