import React from 'react';

const ProductItem = (props) => {
    const {id, name, brand, price, inStock} = props

    return (
        <tr className='list-product'>
            <td>{id}</td>
            <td>{name}</td>
            <td>{brand}</td>
            <td>{price}</td>
            <td>{inStock}</td>
            <td>
                <button className='item-button button-blue'>Update</button>
                <button className='item-button button-red'>Delete</button>
            </td>
        </tr>
    )
}

export default ProductItem