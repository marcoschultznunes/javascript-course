import Axios from 'axios';
import React, {useContext, useState} from 'react';
import { LoggedUserContext, PageContext } from '../App';
import useInput from '../hooks/useInput';

const LoginForm = () => {
    const [name, bindName, setName] = useInput()
    const [email, bindEmail, setEmail] = useInput()
    const [password, bindPassword, setPassword] = useInput()

    const {setPage} = useContext(PageContext)
    const {setUser} = useContext(LoggedUserContext)

    const [signingUp, setSigningUp] = useState(false)

    const clearFields = () => {
        setName('')
        setEmail('')
        setPassword('')
    }
    const toggleSignup = () => {
        clearFields()
        setSigningUp(!signingUp)
    }

    const signin = (e) => {
        const credentials = {
            email: email,
            password: password
        }

        // WITH CREDENTIALS NO FRONTEND TAMBÉM PARA OS COOKIES
        Axios.delete('http://localhost:8083/auth/cookie')
        .then(() => {
            return Axios.post('http://localhost:8083/auth/login', credentials, {
                withCredentials: true
            })
        })
        .then((res) => {   
            setUser({id: res.data.userId, name: res.data.userName})
            setPage('Posts')
        })
        .catch((err) => {
            if(err.response){
                console.log(err.response)
            }
        })
    }

    const signup = (e) => {
        const credentials = {
            name: name,
            email: email,
            password: password
        }

        Axios.post('http://localhost:8083/auth/signup', credentials)
            .then(() => {
                toggleSignup()
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    const submitForm = (e) => {
        e.preventDefault()

        signingUp ? signup() : signin()
    }

    return (  
        <React.Fragment>
            <form className='form form-with-bg' onSubmit={submitForm}>
                <h2>
                    {signingUp ? 'Sign Up' : 'Login'}
                </h2>

                <label htmlFor="name" className={signingUp ? 'label' : 'hidden'}>
                    Name:
                </label>
                <input type="text" placeholder="Name" name="name" {...bindName}
                    className={signingUp ? '' : 'hidden'}
                />

                <label htmlFor="email" className='label'>Email:</label>
                <input type="email" placeholder="Email" name="email" {...bindEmail}/>

                <label htmlFor="password" className='label'>Password:</label>
                <input type="password" placeholder="Password" name="password" {...bindPassword}/>

                <button type="submit" className="bg-green submit-button">
                    {signingUp ? 'Sign up' : 'Log in'}
                </button>
            </form>
            <div className='login-to-signup-div'>
                <h3>
                    {signingUp ? "Already have an account?" : "Don't have an account yet?"}
                </h3>
                <button className='bg-blue signup-button' onClick={toggleSignup}>
                    {signingUp ? "Log in": "Sign up"}
                </button>
            </div>
        </React.Fragment>
        
    );
}
 
export default LoginForm;