import Axios from 'axios';
import React, {useContext} from 'react';
import { LoggedUserContext, PageContext } from '../App';
import useInput from '../hooks/useInput';

const LoginForm = () => {
    const [email, bindEmail] = useInput()
    const [password, bindPassword] = useInput()

    const {setPage} = useContext(PageContext)
    const {setUser} = useContext(LoggedUserContext)

    const signin = (e) => {
        e.preventDefault()

        const credentials = {
            email: email,
            password: password
        }

        // WITH CREDENTIALS NO FRONTEND TAMBÉM PARA OS COOKIES
        Axios.post('http://localhost:8083/auth/login', credentials, {withCredentials: true})
            .then((res) => {   
                setUser({id: res.data.userId, name: res.data.userName})
                setPage('Posts')
            })
            .catch((err) => {
                if(err.response){
                    console.log(err.response)
                    console.log(err.response)
                }
            })
    }
    
    return (  
        <React.Fragment>
            <form className='form' onSubmit={signin}>
                <label htmlFor="email" className='label'>Email</label>
                <input type="email" placeholder="Email" name="email" {...bindEmail}/>

                <label htmlFor="password" className='label'>Password:</label>
                <input type="password" placeholder="Password" name="password" {...bindPassword}/>

                <button type="submit" className="bg-green submit-button">Log in</button>
            </form>
            <div className=''>
                <h3>Don't have an account yet?</h3>
                <button className='bg-blue signup-button'>Sign Up</button>
            </div>
        </React.Fragment>
        
    );
}
 
export default LoginForm;