import React, { Component } from 'react';
import Axios from 'axios';
import ProductItem from './ProductItem';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            products: [],
            errors: false
        }
    }

    componentDidMount = () => {
        Axios.get('http://localhost:8083/products')
            .then(products => {
                this.setState({
                    products: products.data.products,
                    errors: false
                }, () => {console.log(this.state)})
            })
            .catch(e => {
                console.log(e)
                this.setState({errors: true})
            })
    }

    render() {
        if(this.state.errors){
            return <h2>Could not fetch from the server!</h2>
        }
        if(this.state.products.length < 1){
            return <h2>Fetching Products...</h2>
        }
        
        return (  
            <table className='product-list'>
                <thead>
                    <tr className='product-list-head'>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Brand</td>
                        <td>Price</td>
                        <td>In Stock</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map(product => {
                        const {_id, name, brand, price, inStock} = product

                        return(
                            <ProductItem id={_id} name={name} brand={brand} price={price}
                                inStock={inStock} key={_id}/>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}
 
export default ProductList;