/*
    useMemo memorizes the result of a function so that when a component re-renders, it uses
the cached value instead of recalculating it, if the given parameters stay the same.
    It is most useful for optimizing heavy functions which can take up to a few seconds to 
resolve. By using this cached value we increase our speed.
*/

/* Example: */
import React, { useState } from 'react';

const TwoCounters = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const incrementCounter1 = () => {
        setCounter1((prevCount1) => prevCount1 + 1)
    }
    const incrementCounter2 = () => {
        setCounter2((prevCount2) => prevCount2 + 1)
    }

    /* This simulates a very slow function. Each time either of the counters changes, 
    the component is re-rendered, and this function must resolve again, even though it is
    only for the counter 1. */
    const isOdd = () => {
        for(let i = 0 ; i < 300000000; i++){

        }

        return counter1 % 2
    }

    return (
        <div>
            <button onClick={incrementCounter1} className='bg-blue'>
                Counter One: {counter1}
            </button>
            <span>{isOdd() ? 'Odd' : 'Even'}</span><br/>

            {/* Counter 2 is also slow, as it causes a re-render, making the component calculate 
            if counter 1 is even or odd again, with the slow function.*/}
            <button onClick={incrementCounter2} className='bg-green'>
                Counter Two: {counter2}
            </button>
        </div>
    )
}

export default TwoCounters