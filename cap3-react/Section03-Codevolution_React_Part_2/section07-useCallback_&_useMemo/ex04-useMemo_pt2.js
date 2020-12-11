/* 
    To resolve the issue in the previous example, we'll tell react to memorize the result of 
isOdd function, so that when the component re-renders due to a change unrelated to counter 1, 
the function does not need to be called again. We'll use the useMemo hook for that.
*/

import { useMemo } from "react"

const isOdd = useMemo (() => {
    for(let i = 0 ; i < 300000000; i++){

    }

    return counter1 % 2
}, [counter1]) // This tells react to watch for when the counter 1 updates, similar to useEffect

/*  
    Now isOdd is a variable, so we also need to change the JSX:

    <span>{isOdd ? 'Odd' : 'Even'}</span><br/> 
*/

/*
    Now there is no longer a delay when clicking on the counter 2 button
*/