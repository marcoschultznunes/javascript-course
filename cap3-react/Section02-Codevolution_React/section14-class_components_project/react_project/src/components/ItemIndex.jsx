import React, { Component } from 'react';
import ProductList from './ProductList';
import UserList from './UserList';

class ItemIndex extends Component {
    constructor(props) {
        super(props);
        this.itemList = ''
    }

    static getDerivedStateFromProps = (props) => {
        switch(props.itemType){
            case 'Product': return {itemList: <ProductList />}
            case 'User': return {itemList: <UserList />}
            
            default: return {itemList: <h2>Error</h2>}
        }
    }

    render() { 
        const {itemType} = this.props

        return (  
            <React.Fragment>
                <header className='index-header'>
                    <h1>{itemType + ' Index'}</h1>
                </header>
                
                <div className='product-table-div'>
                    <div className='table-control-buttons'>
                        <button onClick={() => this.props.changePage('New' + itemType)}>
                            + New {itemType}
                        </button>
                    </div>
                    {this.state.itemList}
                </div>
            </React.Fragment>
        );
    }
}
 
export default ItemIndex;