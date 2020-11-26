import React, { Component } from 'react';
import Axios from 'axios'

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
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        let path = 'http://localhost:8083/products' 

        if(this.props.method === 'patch'){
            path += '/' + this.props.item.id
        }

        Axios[this.props.method](path, this.state)
            .then(res => {
                if(res){
                    alert(res.data.message)
                    this.props.changePage('Products')
                } else{
                    alert('The server did not respond')
                }
            })
            .catch(e => {
                console.log(e.response)
                alert(e.response.data)
            })
    }

    render() {
        const idDisplay = this.props.method === 'patch' ? 
            <React.Fragment> 
                <label>ID</label>
                <input type="text" value={this.props.item.id} className='read-only-input' 
                    readOnly />
            </React.Fragment>  
            : '' 
        
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