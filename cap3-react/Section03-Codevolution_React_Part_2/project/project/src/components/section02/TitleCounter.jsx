import React, { useState, useEffect } from 'react';

const TitleCounter = () => {

    const [count, setCount] = useState(0)
    const [email, setEmail] = useState('')

    useEffect(() => {
        document.title = count
        console.log(count)
    }, [count])

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