/*
    We can reuse a reducer function to multiple useReduce. In this example, we have two 
counters, each with their own state.
*/

import React, {useReducer} from 'react';

const initialState = 0

const reducer = (state, action) => {
    switch(action.op){
        case '+': return state + action.n
        case '-': return state - action.n
        case '0': return initialState
        default: return state
    }
}

const Counters = () => {

    const [counter1, dispatch1] = useReducer(reducer, initialState)
    const [counter2, dispatch2] = useReducer(reducer, initialState)
    
    return (  
        <div>
            <div>
                <h3>{counter1}</h3>
                <button className='bg-green' onClick={() => dispatch1({op: '+', n: 1})}>
                    +1
                </button>
                <button className='bg-green' onClick={() => dispatch1({op: '+', n: 5})}>
                    +5
                </button>
                <button className='bg-purple' onClick={() => dispatch1({op: '-', n: 1})}>
                    -1
                </button>
                <button className='bg-purple' onClick={() => dispatch1({op: '-', n: 5})}>
                    -5
                </button>
                <button className='bg-black' onClick={() => dispatch1({op: '0'})}>
                    Reset
                </button>
            </div>
            <div>
                <h3>{counter2}</h3>
                <button className='bg-green' onClick={() => dispatch2({op: '+', n: 1})}>
                    Increment
                </button>
                <button className='bg-purple' onClick={() => dispatch2({op: '-', n: 1})}>
                    Decrement
                </button>
            </div>
        </div>
    );
}
 
export default Counters;