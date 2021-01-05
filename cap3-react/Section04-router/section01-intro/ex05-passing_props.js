/* 
    The Route component passes a few props based on the URL, which we can use to help us such
    as with params. Writing a custom component inside the Route component and passing props to 
    it through there will sacrifice the props based on the URL.

    To circumvent this, we need to use the render attribute and pass the props through there
*/

/* FoodList.jsx */
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

/* On app.jsx */
const App = () => {
    return (
        <div>
            {/* Component with props */}
            <Route path="/list" render={(props) =>  
                <FoodList {...props} hello='There'/> 
            }/>

            {/* Component without props */}
            <Route path="/form" component={LittleForm} />
        </div>
    )
}
        
/* 
    The logged component props:

    hello: "There"
    history: {length: 25, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
    location: {pathname: "/list", search: "", hash: "", state: null, key: "62c5dg"}
    match: {path: "/list", url: "/list", isExact: true, params: {…}}
    staticContext: undefined
*/
