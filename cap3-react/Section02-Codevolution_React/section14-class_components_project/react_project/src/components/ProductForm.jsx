import React, { Component } from 'react';
import Axios from 'axios'

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: '',
            brand: '',
            price: '',
            inStock: ''
        }
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        Axios.post('http://localhost:8083/products', this.state)
            .then(res => {
                if(res){
                    alert('Product created')
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
        return (
            <React.Fragment>
                <header className='index-header'>
                    <h1>New Product</h1>
                </header>
                <form action="" className='new-form'>
                    <input 
                        type="text" name="name" onChange={this.updateInput} 
                        value={this.state.name} placeholder="Name"
                    />
                    <input 
                        type="text" name="brand" onChange={this.updateInput} 
                        value={this.state.brand} placeholder="Brand"
                    />
                    <input 
                        type="text" name="price" onChange={this.updateInput} 
                        value={this.state.price} placeholder="Price"
                    />
                    <input 
                        type="text" name="inStock" onChange={this.updateInput} 
                        value={this.state.inStock} placeholder="Quantity in Stock"
                    />

                    <button type="submit" onClick={this.onSubmit}>Create Product</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default ProductForm;