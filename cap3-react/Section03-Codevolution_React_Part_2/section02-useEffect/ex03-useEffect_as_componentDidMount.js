/*  
    We can use the useEffect hook in a way that it is called only once, when the component is
rendered for the first time, just like the componentDidMount method.

    To do that, we just need to pass an empty array to the second parameter.
*/

/* Timer.jsx */
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0)

    const incrementTimer = () => setTime(prevTime => prevTime + 1)

    // The [] 2nd parameter is what makes the interval be set only once
    useEffect(() => setInterval(incrementTimer, 1000), []) 

    return (  
        <div>
            <h2>{time}</h2>
        </div>
    );
}
 
export default Timer;

/* 
    This is extremely useful for: 
        - Fetching data;
        - Adding listeners;
        - Setting intervals;
        - etc.
*/
