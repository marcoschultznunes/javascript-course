import { useState } from 'react';

const useCounter = (initialCount = 0, incrementValue = 1) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + incrementValue)
    }

    const increaseBy = (value) => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - incrementValue)
    }

    const decreaseBy = (value) => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset, increaseBy, decreaseBy]
}

export default useCounter