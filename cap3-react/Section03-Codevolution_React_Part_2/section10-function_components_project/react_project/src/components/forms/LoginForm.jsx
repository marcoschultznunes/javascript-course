import Axios from 'axios';
import React, {useContext, useState} from 'react';
import { LoggedUserContext, PageContext } from '../App';
import useErrorHandler from '../hooks/useErrorHandler';
import useInput from '../hooks/useInput';
import useLoadSpinner from '../hooks/useLoadSpinner';

const LoginForm = () => {
    const [name, bindName, setName] = useInput()
    const [email, bindEmail, setEmail] = useInput()
    const [password, bindPassword, setPassword] = useInput()

    const {setPage} = useContext(PageContext)
    const {setUser} = useContext(LoggedUserContext)

    const [signingUp, setSigningUp] = useState(false)

    const [loadSpinner] = useLoadSpinner({height: "30px", width: "30px", marginTop: "5px"})
    const [loading, setLoading] = useState(false)

    const [setError, setSuccess, errorElement] = useErrorHandler()

    const clearFields = () => {
        setName('')
        setEmail('')
        setPassword('')
    }
    const toggleSignup = () => {
        setSuccess('')
        setError('')
        clearFields()
        setSigningUp(!signingUp)
    }

    const signin = (e) => {
        const credentials = {
            email: email.trim(),
            password: password.trim()
        }

        if(credentials.email.length < 7 || credentials.email.length > 150){
            return setError('Emails contain 7-150 characters.')
        }
        if(credentials.password.length < 10 || credentials.password.length > 80){
            return setError('Passwords contain 10-80 characters')
        }

        // WITH CREDENTIALS NO FRONTEND TAMBÉM PARA OS COOKIES
        setLoading(true)

        Axios.post('http://localhost:8083/auth/login', credentials, {
            withCredentials: true
        })
        .then((res) => {   
            console.log(res.data)
            setLoading(false)
            setUser({id: res.data.userId, name: res.data.userName})
            setPage('Posts')
        })
        .catch((err) => {
            setLoading(false)

            if(err.response){
                if(err.response.status === 401){
                    return setError('Email or password is incorrect.')
                }
                if(err.response.status === 404){
                    return setError('Server is offline. Please, try again later.')
                }
            } 

            return setError('An error has ocurred. Please, try again later.')
        })

    }

    const signup = (e) => {
        const credentials = {
            name: name.trim(),
            email: email.trim(),
            password: password.trim()
        }

        if(credentials.name.length < 5 || credentials.name.length > 200){
            return setError('Name must contain 5-200 characters.')
        }
        if(credentials.email.length < 7 || credentials.email.length > 150){
            return setError('Email must contain 7-150 characters.')
        }
        if(credentials.password.length < 10 || credentials.password.length > 80){
            return setError('Password must contain 10-80 characters.')
        }

        Axios.post('http://localhost:8083/auth/signup', credentials)
            .then(() => {
                toggleSignup()
                setSuccess('User successfully registered.')
            })
            .catch(err => {
                if(err.response.status === 422){
                    return setError(err.response.data.errors[0].msg)
                }
                else{
                    return setError('An error has ocurred. Please try again later.')
                }
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

                {errorElement}

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

                {loading ?
                    loadSpinner :
                    <button type="submit" className="bg-green submit-button">
                        {signingUp ? 'Sign up' : 'Log in'}
                    </button>
                }
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