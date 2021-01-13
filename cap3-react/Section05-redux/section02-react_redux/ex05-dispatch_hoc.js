/*
    In this example, we'll access the global state in CakeContainer.js, dispatching the buyCake
    action.

    There are 2 ways of doing this, one is with a HOC pattern and the other, more easy to use,
    is with hooks. In this example we'll use the HOC pattern, then on the next one we'll use
    hooks.
*/

/* CakeContainer.js */
const CakeContainer = () => {
    return (  
        <div>
            <h2>Number of Cakes - </h2>
            <button className='bg-blue'>Buy Cake</button>
        </div>
    );
}

/* mapStateToProps => Used in combination with selectors to select the attributes from the
global state which we'll use with the component. In this case, the attribute is very simple
and straightforward, so we won't use selectors. */
const mapStateToProps = state => {
    return {
        numberOfCakes: state.numberOfCakes
    }
}


/*
    Selectors => We use a files with functions called selectors to filter the attributes of
    the global state we want to use with the mapStateToProps function. This makes sense for 
    when our state is more complex, such as when there are nested objects.

    This way, we can avoid incoveniences when rewriting code.
*/

/* Example: */
const selectNumberOfCakes = state => state.numberOfCakes

const mapStateToPropsWithSelector = state => {
    return {
        numberOfCakes: selectNumberOfCakes(state)
    }
}

/* Back to CakeContainer.js, now we need to implement mapDispatchToProps */
import { buyCake } from "../redux"; // Import from our index.js file

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

/* Next we want to use connect() from react-redux, finally exporting the component */
import { connect } from 'react-redux';

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);


/* 
    Now we have access to the state and dispatch through the component's props 
*/

