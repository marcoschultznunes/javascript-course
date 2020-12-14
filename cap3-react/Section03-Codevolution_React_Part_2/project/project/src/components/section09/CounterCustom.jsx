import React from 'react';
import useCounter from '../../hooks/useCounter';

const CounterCustom = () => {
    const[count, increment, decrement, reset, increaseBy, decreaseBy] = useCounter()

    return ( 
        <div>
            <h3>{count}</h3>
            <button onClick={increment} className='bg-green'>Increment</button>
            <button onClick={() => increaseBy(8)} className='bg-blue'>Increment 8</button>
            <button onClick={decrement} className='bg-purple'>Decrement</button>
            <button onClick={() => decreaseBy(8)} className='bg-orange'>Decrement 8</button>
            <button onClick={reset} className='bg-red'>Reset</button>
        </div>
    );
}
 
export default CounterCustom;