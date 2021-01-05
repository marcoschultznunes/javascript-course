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