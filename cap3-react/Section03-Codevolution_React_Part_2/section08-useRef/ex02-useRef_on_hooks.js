/* 
    In this example, we'll use a ref to access a variable inside the useEffect hook from a 
button. We'll reuse the Timer.jsx component from section 02, adding a stop button
*/
import React, { useState, useEffect, useRef } from 'react';

const Timer2 = () => {

    const [time, setTime] = useState(0)
    const intervalRef = useRef() // The ref

    const incrementTimer = () => setTime(prevTime => prevTime + 1)

    useEffect(() => {
        /* We store the interval on the ref.current */
        intervalRef.current = setInterval(incrementTimer, 1000) 

        return (() => {
            clearInterval(intervalRef.current)
        })
    }, [])

    const stopTimer = () => { 
        clearInterval(intervalRef.current) // Clears the interval through the ref
    }

    return (  
        <div>
            <h2>{time}</h2>
            <button className='bg-red' onClick={stopTimer}>Stop</button>
        </div>
    );
}
 
export default Timer2;