/* 
    In the second parameter of the useEffect hook, we pass an array of the component's state 
properties which will determine if the useEffect function will be called, it will not be called
if those properties do not change.
*/

/* We'll rewrite the previous example, adding an input, and a new property to the state that is
binded to it */
import React, { useState, useEffect } from 'react';

const TitleCounter = () => {

    const [count, setCount] = useState(0)
    const [email, setEmail] = useState('')

    useEffect(() => {
        document.title = count
        console.log(count)
    }, [count]) // If the count doesn't change, this function is not called.

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    return ( 
        <div>
            <input type="email" onChange={updateEmail} value={email} placeholder='Email'/>
            <button className='bg-purple' onClick={incrementCount}>Increment Title</button>
        </div>
    );
}
 
export default TitleCounter;