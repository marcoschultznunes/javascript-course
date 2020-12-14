/* useCounter.js */
import { useState } from 'react';

const useCounter = (initialCount = 0, incrementValue = 1) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + incrementValue)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - incrementValue)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter


/* CounterCustom.jsx */
import useCounter from '../../hooks/useCounter';

const CounterCustom = () => {
    const[count, increment, decrement, reset] = useCounter()

    return ( 
        <div>
            <h3>{count}</h3>
            <button onClick={increment} className='bg-green'>Increment</button>
            <button onClick={decrement} className='bg-purple'>Decrement</button>
            <button onClick={reset} className='bg-red'>Reset</button>
        </div>
    );
}
 
export default CounterCustom;