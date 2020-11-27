import React, {Component} from 'react';
import Axios from 'axios'
import PageContext from './context/pageContext';
import { ucFirstDeleteLast } from '../utils/stringUtils';

const ItemHOC = (WrappedComponent, endpoint) => {
    class ItemHOC extends Component {

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
            Axios.delete(`http://localhost:8083/${endpoint}/${this.props.id}`)
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
                            onClick={() => this.context(
                                'Edit' + ucFirstDeleteLast(endpoint), // Ex: EditProduct
                                this.props
                            )}
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
            return (
                <WrappedComponent 
                    selfRef={this.selfRef}
                    renderButtons={this.renderButtons}
                    {...this.props}
                />
            )           
        }
    }
     
    return ItemHOC;
}

export default ItemHOC