/*  
    By creating custom hooks, we can add reusability to our code. In this example, we will 
divide a counter title component into a counter title component and a useDocumentTitle hook
*/

/* CounterTitle.jsx without the useDocumentTitle hook */
import React, { useState, useEffect } from 'react';

const CounterTitle = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count
    }, [count])

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


/* useDocumentTitle.js custom hook */
import { useEffect } from 'react';

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = count
    }, [count])
}

export default useDocumentTitle


/* CounterTitle.jsx with the useDocumentTitle hook */
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