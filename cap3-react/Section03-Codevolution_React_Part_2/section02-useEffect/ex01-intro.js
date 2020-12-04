/*
    useEffect is a hook which allows us to use 3 state component lifecycle methods in a 
    function component: the componentDidMount, componentDidUpdate and componentWillUnmount
    methods.

    useEffect() takes a function as a parameter, and that function is executed after every
    render.

    You can use multiple useEffects in a single component.
*/

/* TitleCounter.jsx */
import React, { useState, useEffect } from 'react';

const TitleCounter = () => {

    const [state, setState] = useState(0)

    /* Title of the page changes each time this component renders */
    useEffect(() => document.title = state) 

    const incrementCount = () => {
        setState(prevState => prevState + 1)
    }

    return ( 
        <div>
            <button className='bg-purple' onClick={incrementCount}>Increment Title</button>
        </div>
    );
}
 
export default TitleCounter;