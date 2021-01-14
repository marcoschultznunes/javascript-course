import { buyCake } from "../redux";
import { useDispatch, useSelector } from 'react-redux';

const CakeContainerHook = (props) => {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()

    return (  
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button className='bg-blue' onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}
 
export default CakeContainerHook;
