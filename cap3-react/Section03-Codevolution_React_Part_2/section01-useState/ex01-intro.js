/*    
    After the previous 14 sections, where our work was focused on class components, we'll now 
learn hooks, which allows us to use class components' functionalities in function components,
with a few peculiar changes. They were added in version 16.8, and allow us to make cleaner, 
shorter code and to reuse components without having to resort to the complicated HOC and Render 
Props pattern, which class components use.

    The first hook we'll learn will be the useState hook, it allows us to use State in function
components.

    There are a few differences if we use state this way:
        - The state variable is not limited to an object, it can be an array or any other type;
        - Every time we use setState, it does not keep the previous values, we must pass the
        previous state as a spread operator to the new state.
*/


/* Counter.jsx */
import React, { useState } from 'react';

const Counter = () => {

    /* destructures state and setState from useState, the param is the state initial value. */
    const [state, setState] = useState(0) // Don't forget to destructure with []

    const incrementCounter = () => {
        setState(prevState => prevState + 1) // Good practice: use prevState
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
