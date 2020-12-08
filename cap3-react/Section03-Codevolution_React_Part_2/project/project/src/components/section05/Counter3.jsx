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

const Counter3 = () => {

    const [counter, dispatch] = useReducer(reducer, initialState)
    
    return (  
        <div>
            <h3>{counter}</h3>
            <button className='bg-blue' onClick={() => dispatch({op: '+', n: 1})}>
                +1
            </button>
            <button className='bg-blue' onClick={() => dispatch({op: '+', n: 5})}>
                +5
            </button>
            <button className='bg-red' onClick={() => dispatch({op: '-', n: 1})}>
                -1
            </button>
            <button className='bg-red' onClick={() => dispatch({op: '-', n: 5})}>
                -5
            </button>
            <button className='bg-black' onClick={() => dispatch({op: '0'})}>
                Reset
            </button>
        </div>
    );
}
 
export default Counter3;