import React, {useReducer} from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case '+1': return state + 1
        case '-1': return state - 1
        case '0': return initialState
        default: return state
    }
}

const Counter2 = () => {

    const [counter, dispatch] = useReducer(reducer, initialState)
    
    return (  
        <div>
            <h3>{counter}</h3>
            <button className='bg-blue' onClick={() => dispatch('+1')}>Increment</button>
            <button className='bg-red' onClick={() => dispatch('-1')}>Decrement</button>
            <button className='bg-black' onClick={() => dispatch('0')}>Reset</button>
        </div>
    );
}
 
export default Counter2;