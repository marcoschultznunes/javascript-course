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