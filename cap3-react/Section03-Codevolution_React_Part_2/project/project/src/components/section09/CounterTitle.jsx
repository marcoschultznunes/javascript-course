import React, { useState } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const CounterTitle = () => {

    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    return ( 
        <div>
            <button className='bg-green' onClick={incrementCount}>Increment Title</button>
        </div>
    );
}
 
export default CounterTitle;