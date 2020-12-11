import React, { useState, useMemo } from 'react';

const TwoCounters = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const incrementCounter1 = () => {
        setCounter1((prevCount1) => prevCount1 + 1)
    }
    const incrementCounter2 = () => {
        setCounter2((prevCount2) => prevCount2 + 1)
    }

    const isOdd = useMemo (() => {
        for(let i = 0 ; i < 300000000; i++){
    
        }
    
        return counter1 % 2
    }, [counter1])

    return (
        <div>
            <button onClick={incrementCounter1} className='bg-blue'>
                Counter One: {counter1}
            </button>
            <span>{isOdd ? 'Odd' : 'Even'}</span><br/>

            <button onClick={incrementCounter2} className='bg-green'>
                Counter Two: {counter2}
            </button>
        </div>
    )
}

export default TwoCounters