import { useState } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductController = () => {
    const [id, setId] = useState(1)
    
    const idHandler = (e) => {
        setId(e.target.value)
    }

    return (  
        <div>
            <input type="number" onChange={idHandler} value={id}/><br/>
            <Link to={"/products/" + id} >View Product</Link>

            <Route path="/products/:id" render={(props) => 
                <ProductDetails {...props} id={props.match.params.id} />
            }/>
        </div>
    );
}
 
export default ProductController;