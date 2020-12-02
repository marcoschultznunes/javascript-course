import React, { useState } from 'react';

const Counter = () => {

    const [state, setState] = useState(0)

    const incrementCounter = () => {
        setState(prevState => prevState + 1)
    }

    const decrementCounter = () => {
        setState(prevState => prevState - 1)
    }

    const resetCounter = () => {
        setState(0)
    }

    return ( 
        <div>
            <h3>{state}</h3>
            <button onClick={incrementCounter} className='bg-blue'>Increment</button>
            <button onClick={decrementCounter} className='bg-red'>Decrement</button>
            <button onClick={resetCounter} className='bg-black'>Reset</button>
        </div>
    );
}
 
export default Counter;