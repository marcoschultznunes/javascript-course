import React, { useState } from 'react';
import Timer from './Timer';

const TimerController = () => {
    const [stopped, setStopped] = useState(false)

    const toggleTimer = () => {
        setStopped(prevStopped => !prevStopped)
    }

    const timer = stopped ? <React.Fragment /> : <Timer />

    return ( 
        <div>
            {timer}
            <button onClick={toggleTimer} className='bg-red'>Toggle Timer</button>
        </div>
    );
}
 
export default TimerController;