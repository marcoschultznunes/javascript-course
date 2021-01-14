/*
    The more modern way of accessing the state and the dispatch is by using 2 hooks provided by
    react-redux: useSelector and useDispatch
*/

/* CakeContainer rewritten */
import { buyCake } from "../redux";
import { useDispatch, useSelector } from 'react-redux';

const CakeContainerHook = (props) => {
    
    const numberOfCakes = useSelector(state => state.numberOfCakes)

    const dispatch = useDispatch()

    return (  
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button className='bg-blue' onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}
 
export default CakeContainerHook;
