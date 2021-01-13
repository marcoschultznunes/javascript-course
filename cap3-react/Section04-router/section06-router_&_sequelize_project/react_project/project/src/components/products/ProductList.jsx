import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import Axios from 'axios'
import ProductCard from './ProductCard';

const ProductList = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        Axios.get('http://localhost:8083/categories/' + props.match.params.id)
        .then(res => {
            console.log(res.data.category.products)
            setProducts(res.data.category.products)
            setLoading(false)
        })
        .catch(err => {
            setError('Failed to fetch products.')
            setLoading(false)
        })
    }, [props])

    const productList = error ? <li> {error} </li> :
        products.map(product => 
            <li key={product.id + product.description}>< ProductCard product={product} /></li>
        )

    return (  
        <div>
            {/* <h3>Category: {props.match.params.category}</h3> */}
            <ul id='product-list'>
                {loading ? <li>Loading products...</li> : productList}
            </ul>
        </div>
    );
}
 
export default ProductList;
