import React, { Component } from 'react';
import ProductList from './ProductList';

class ProductIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <header className='index-header'>
                    <h1>Products</h1>
                </header>
                <div className='product-table-div'>
                    <div className='table-control-buttons'>
                        <button>+ New Product</button>
                    </div>
                    <ProductList />
                </div>
            </React.Fragment>
        );
    }
}
 
export default ProductIndex;