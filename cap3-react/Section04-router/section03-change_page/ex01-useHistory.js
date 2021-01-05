/*
    https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
*/

/* In this example, we'll submit a simple form and redirect to the home route */
import { useState } from "react";
import { useHistory } from "react-router";

const LittleForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }

    /* For this, we'll use the useHistory hook */
    const history = useHistory()

    const submitHandler = () => {
        alert(`
            Name: ${name}
            Email: ${email}
            Date: ${date}
        `)

        /* This will change the URL */
        history.push('/')
    }

    return (  
        <form onSubmit={submitHandler}>
            <h1>Little Form</h1>
            <input type="text" placeholder="name" value={name} onChange={nameHandler}/><br/>
            <input type="text" placeholder="email" value={email} onChange={emailHandler}/><br/>
            <input type="date" value={date} onChange={dateHandler}/><br/>
            <button type="submit">Submit form</button>
        </form>
    );
}
 
export default LittleForm ;

