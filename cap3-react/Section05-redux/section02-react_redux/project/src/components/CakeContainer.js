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
