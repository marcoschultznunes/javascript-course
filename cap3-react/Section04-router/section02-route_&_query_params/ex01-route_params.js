/* 
    In this example i made an input with a link which selects a product, by its id, to be
    displayed
*/

/* ProductController.jsx */
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

            {/* props.match.params => accesses the route params */}
            <Route path="/products/:id" render={(props) => 
                <ProductDetails {...props} id={props.match.params.id} />
            }/>
        </div>
    );
}
 
export default ProductController;

/* ProductDetails.jsx */
import { useEffect, useState } from "react";

const ProductDetails = (props) => {
    const {id} = props

    const [product, setProduct] = useState({})

    useEffect(() => {
        switch(Number(id)){
            case 1: setProduct({
                description: 'Smartphone', 
                brand: 'Xiaomi', 
                price: 900
            })
            break
            case 2: setProduct({
                description: 'PC', 
                brand: 'Intel', 
                price: 2000
            })
            break
            case 3: setProduct({
                description: 'Smartphone', 
                brand: 'Samsung', 
                price: 1400
            })
            break
            case 4: setProduct({
                description: 'TV', 
                brand: 'LG', 
                price: 1200
            })
            break
            default: setProduct({
                description: 'Not found', 
                brand: 'Not found', 
                price: 99999999
            })
        }
    }, [id])
    
    
    return (  
        <div>
            <h3>Product {id}</h3>
            <ul>
                <li>Description: {product.description}</li>
                <li>Brand: {product.brand}</li>
                <li>Price: ${product.price}</li>
            </ul>
        </div>
    );
}
 
export default ProductDetails;
