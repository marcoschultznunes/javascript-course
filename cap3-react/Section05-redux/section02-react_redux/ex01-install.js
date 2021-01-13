/*
    We need to install both the redux and the react-redux packages:
        npm install --save redux react-redux
*/

/* We'll make a CakeContainer.jsx component which will have a button to buy cakes from the
redux store */
const CakeContainer = () => {
    return (  
        <div>
            <h2>Number of Cakes - </h2>
            <button>Buy Cake</button>
        </div>
    );
}
 
export default CakeContainer;
