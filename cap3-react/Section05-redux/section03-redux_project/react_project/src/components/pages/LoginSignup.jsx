import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput'; 
import { loginAction, signUpAction } from '../../redux/users/userActions';

const LoginSignup = () => {
    const [name, bindName, setName] = useInput()
    const [surname, bindSurname, setSurname] = useInput()
    const [email, bindEmail, setEmail] = useInput()
    const [password, bindPassword, setPassword] = useInput()
    const [confirmPassword, bindConfirmPassword, setConfirmPassword] = useInput()

    const clearFields = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const dispatch = useDispatch()

    const login = () => {
        dispatch(loginAction({
            email, password
        }))
    }

    const signup = () => {
        // TODO implement confirm password failure action

        dispatch(signUpAction({
            email, password, name, surname
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        signup()
    }

    return (  
        <main>
            <form onSubmit={submitHandler}>
                <input type="text" name='email' placeholder='Email' {...bindEmail}/>
                <input type="password" name='password' placeholder='Password' {...bindPassword}/>
                <input type="password" name='confirmPassword' placeholder='Confirm Password' 
                    {...bindConfirmPassword}
                />
                <input type="text" name='name' placeholder='Name' {...bindName}/>
                <input type="text" name='surname' placeholder='Surname' {...bindSurname}/>
                <button type="submit">Login</button>
            </form>
        </main>
    );
}
 
export default LoginSignup;
