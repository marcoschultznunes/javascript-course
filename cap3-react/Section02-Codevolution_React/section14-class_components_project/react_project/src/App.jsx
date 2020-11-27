import React, { Component } from 'react';
import { PageProvider } from './components/context/pageContext';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import ItemIndex from './components/ItemIndex';
import UserForm from './components/UserForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Products',
            item: {}
        }
    }

    changePage = (newPage, newItem) => {
        this.setState({
            page: newPage,
            item: newItem || {}
        })
    }

    updateBody = () => {
        
        switch(this.state.page){
            case 'Home': return <h1>Home</h1>
            case 'Products': return (
                <ItemIndex changePage={this.changePage} itemType='Product'/>
            )
            case 'Users': return (
                <ItemIndex changePage={this.changePage} itemType='User'/>
            )
            case 'Orders': return <h1>Orders</h1>
            case 'Statistics': return <h1>Statistics</h1>
            
            case 'NewProduct': return (
                <ProductForm changePage={this.changePage} item={{}} method='post'/>
            )
            case 'NewUser': return(
                <UserForm changePage={this.changePage} item={{}} method='post'/>
            )
            case 'EditProduct': return (
                <ProductForm changePage={this.changePage} item={this.state.item} method='patch'/>
            )
            case 'EditUser': return (
                <UserForm changePage={this.changePage} item={this.state.item} method='patch' />
            )

            default: return <h1>Error</h1>
        }
    }

    render() { 
        let body = this.updateBody()

        return (  
            <React.Fragment>

                <PageProvider value={this.changePage}>
                    <Navbar page={this.state.page}/>
                </PageProvider>
                
                <PageProvider value={this.changePage}>
                    <main id='page-body'>
                        {body}
                    </main>
                </PageProvider>
            
            </React.Fragment>
        );
    }
}
 
export default App;