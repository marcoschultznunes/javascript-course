import React, { Component } from 'react';
import Axios from 'axios'
import PageContext from './context/pageContext';

class ProductItem extends Component{
    constructor(props) {
        super(props);
        this.state = {  
            confirmButtons: false,
        }
        this.selfRef = React.createRef();
    }

    static contextType = PageContext

    toggleConfirm = () => {
        if(this.state.confirmButtons){
            this.setState({confirmButtons: false})
        } else {
            this.setState({confirmButtons: true})
        }
    }

    deleteItem = () => {
        Axios.delete('http://localhost:8083/products/' + this.props.id)
            .then(res => {
                if(res){
                    this.selfRef.current.remove()
                }
                else{
                    alert('Server did not respond')
                }
            })
            .catch(e => {
                console.log(e)
                alert(e)
            })
    }

    renderButtons = () => {
        if(this.state.confirmButtons === true){
            return (
                <React.Fragment>
                    <button className='item-button button-green' onClick={this.deleteItem}>
                        Confirm
                    </button>
                    <button className='item-button button-red' onClick={this.toggleConfirm}>
                        Cancel
                    </button>
                </React.Fragment>
            )
        } else{
            return (
                <React.Fragment>
                    <button 
                        className='item-button button-blue' 
                        onClick={() => this.context('EditProduct')}
                    >
                        Update
                    </button>
                    <button className='item-button button-red' onClick={this.toggleConfirm}>
                        Delete
                    </button>
                </React.Fragment>
            )
        }
    }

    render(){
        const {id, name, brand, price, inStock} = this.props

        return (
            <tr className='list-product' ref={this.selfRef}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{brand}</td>
                <td>{price}</td>
                <td>{inStock}</td>
                <td>
                    {this.renderButtons()}
                </td>
            </tr>
        )
    }
}

export default ProductItem