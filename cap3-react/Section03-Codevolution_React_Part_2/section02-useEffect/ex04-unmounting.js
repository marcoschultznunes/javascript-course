/* 
    We can also make the useEffect call a function when the component unmounts. This is done by
returning that desired function.
*/

/* Timer.jsx */
useEffect(() => {
    const timer = setInterval(incrementTimer, 1000)
    
    return (() => { // Function will be called when the component unmounts
        clearInterval(timer)
    })
}, [])


/* TimerController.jsx */
import React, { useState } from 'react';
import Timer from './Timer';

const TimerController = () => {
    const [stopped, setStopped] = useState(false)

    const toggleTimer = () => {
        setStopped(prevStopped => !prevStopped)
    }

    // Provokes Timer component to be unmounted when stopped == true
    const timer = stopped ? <React.Fragment /> : <Timer />

    return ( 
        <div>
            {timer}
            <button onClick={toggleTimer} className='bg-red'>Toggle Timer</button>
        </div>
    );
}
 
export default TimerController;

/*
    This will prevent a memory leakage, as the interval will be stopped
*/
