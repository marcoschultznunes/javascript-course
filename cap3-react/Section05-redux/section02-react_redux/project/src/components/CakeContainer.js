import { buyCake } from "../redux";
import { connect } from 'react-redux';

const CakeContainer = (props) => {
    return (  
        <div>
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <button className='bg-blue' onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

const selectNumberOfCakes = state => state.numberOfCakes

const mapStateToProps = state => {
    return {
        numberOfCakes: selectNumberOfCakes(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
