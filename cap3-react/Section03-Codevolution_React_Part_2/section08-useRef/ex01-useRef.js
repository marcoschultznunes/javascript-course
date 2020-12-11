/*
    useRef is the equivalent of class component refs, and there is little changes, altough you 
can use useRef to access variables from anywhere in the component, including other hooks, which
will be shown in the next example.

    In this example, we'll focus an input on page loading.
*/
import React, { useEffect, useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (  
        <div>
            <input placeholder='Focused Input' type="text" ref={inputRef}/>
        </div>
    );
}
 
export default FocusInput;