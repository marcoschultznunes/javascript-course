/*
    We'll combine the reducers in a file called root reducer.
*/
import {combineReducers} from 'redux'
import {cakeReducer} from './cakes/cake_reducer'
import {iceCreamReducer} from './icecream/icecream_reducer'

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

/* 
    Now we need to access the reducers in by specifying cake and iceCream in the components
*/

/* On CakeContainer.js */
const selectNumberOfCakes = state => state.cake.numberOfCakes

/* On CakeContainerHook.js */
const numberOfCakes = useSelector(state => state.cake.numberOfCakes)

/* IceCreamContainer.js */
import { buyIceCream } from "../redux";
import { useDispatch, useSelector } from 'react-redux';

const IceCreamContainer = (props) => {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
    const dispatch = useDispatch()

    return (  
        <div>
            <h2>Number of Ice Cream - {numberOfIceCream}</h2>
            <button className='bg-blue' onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    );
}
 
export default IceCreamContainer;
