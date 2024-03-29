import React, { Component } from 'react';
import { makeIdInput, submitForm, updateStateFromInput } from '../utils/formFunctions';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: this.props.item.name || '',
            brand: this.props.item.brand || '',
            price: this.props.item.price || '',
            inStock: this.props.item.inStock || ''
        }
    }

    updateInput = (e) => {
        updateStateFromInput(e, this)
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        submitForm('products', this)
    }

    render() {
        const idDisplay = makeIdInput(this)
        
        return (
            <React.Fragment>
                <header className='index-header'>
                    <h1>Product Form</h1>
                </header>
                <form action="" className='new-form'>
                    {idDisplay}
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" name="name" onChange={this.updateInput} 
                        value={this.state.name} placeholder="Name"
                    />
                    <label htmlFor="brand">Brand</label>
                    <input 
                        type="text" name="brand" onChange={this.updateInput} 
                        value={this.state.brand} placeholder="Brand"
                    />
                    <label htmlFor="price">Price</label>
                    <input 
                        type="text" name="price" onChange={this.updateInput} 
                        value={this.state.price} placeholder="Price"
                    />
                    <label htmlFor="inStock">Quantity in stock</label>
                    <input 
                        type="text" name="inStock" onChange={this.updateInput} 
                        value={this.state.inStock} placeholder="Quantity in Stock"
                    />

                    <button type="submit" onClick={this.onSubmit}>Save Product</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default ProductForm;