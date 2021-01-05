const FoodList = (props) => {
    const clickHandler = () => {
        console.log(props)
    }

    return (  
        <div>
            <ul>
                <li>Pizza</li>
                <li>Salmon</li>
                <li>Cake</li>
                <li>Snack</li>
            </ul>
            <button onClick={clickHandler}>Print props</button>
        </div>
    );
}
 
export default FoodList;
