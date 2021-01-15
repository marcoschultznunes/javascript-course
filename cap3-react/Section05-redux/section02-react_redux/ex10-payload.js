/*
    In this example, we'll add a payload attribute to our buy cake action, and make 
    CakeContainer component have an input that determines how many cakes to buy.
*/

/* buyCake action */
import {BUY_CAKE} from './cake_types'

export const buyCake = (cakesToBuy = 1) => {
    return {
        type: BUY_CAKE,
        payload: cakesToBuy
    }
}


/* cake reducer */
export const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - action.payload // reduce by the payload
        }
        default: return state
    }
}


/* CakeContainer.js */
import { buyCake } from "../redux";
import { connect } from 'react-redux';
import { useState } from "react";

const CakeContainer = ({numberOfCakes, buyCake}) => {
    const [cakeInput, setCakeInput] = useState(1)

    return (  
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <input type='text' value={cakeInput} onChange={(e) => setCakeInput(e.target.value)} />
            <button className='bg-blue' onClick={() => buyCake(cakeInput)}>
                Buy {cakeInput} Cakes
            </button>
        </div>
    );
}

const selectNumberOfCakes = state => state.cake.numberOfCakes

const mapStateToProps = state => {
    return {
        numberOfCakes: selectNumberOfCakes(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (cakesToBuy) => dispatch(buyCake(cakesToBuy))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);


