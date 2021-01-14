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
