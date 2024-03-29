import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ListHOC from './ListHOC';

class ProductList extends Component {

    render() {
        if(this.props.errors){
            return <h2>Could not fetch from the server!</h2>
        }
        if(this.props.items.length < 1){
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
                    {this.props.items.map(product => {
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
 
export default ListHOC(ProductList, 'products');