import React, { useState, useEffect } from 'react';

const Timer = () => {

    const [time, setTime] = useState(0)

    const incrementTimer = () => setTime(prevTime => prevTime + 1)

    useEffect(() => {
        const timer = setInterval(incrementTimer, 1000)

        return (() => {
            clearInterval(timer)
        })
    }, [])

    return (  
        <div>
            <h2>{time}</h2>
        </div>
    );
}
 
export default Timer;