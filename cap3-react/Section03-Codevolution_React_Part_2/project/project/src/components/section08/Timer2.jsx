import React, { useState, useEffect, useRef } from 'react';

const Timer2 = () => {

    const [time, setTime] = useState(0)
    const intervalRef = useRef()

    const incrementTimer = () => setTime(prevTime => prevTime + 1)

    useEffect(() => {
        intervalRef.current = setInterval(incrementTimer, 1000)

        return (() => {
            clearInterval(intervalRef.current)
        })
    }, [])

    const stopTimer = () => {
        clearInterval(intervalRef.current)
    }

    return (  
        <div>
            <h2>{time}</h2>
            <button className='bg-red' onClick={stopTimer}>Stop</button>
        </div>
    );
}
 
export default Timer2;