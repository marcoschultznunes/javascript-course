import React, { Component } from 'react';
import ItemHOC from './ItemHOC';

class ProductItem extends Component{

    render(){
        const {id, name, brand, price, inStock} = this.props

        return (
            <tr className='list-product' ref={this.props.selfRef}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{brand}</td>
                <td>{price}</td>
                <td>{inStock}</td>
                <td>
                    {this.props.renderButtons()}
                </td>
            </tr>
        )
    }
}

export default ItemHOC(ProductItem, 'products')