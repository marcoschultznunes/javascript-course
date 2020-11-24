import React, { Component } from 'react';
import { PageProvider } from './components/context/pageContext';
import Navbar from './components/Navbar';
import ProductIndex from './components/ProductIndex';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Products'
        }
    }

    changePage = (newPage) => {
        this.setState({
            page: newPage
        })
    }

    updateBody = () => {
        
        switch(this.state.page){
            case 'Home': return <h1>Home</h1>
            case 'Products': return <ProductIndex />
            case 'Users': return <h1>Users</h1>
            case 'Orders': return <h1>Orders</h1>
            case 'Statistics': return <h1>Statistics</h1>

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
                
                <main id='page-body'>
                    {body}
                </main>
            
            </React.Fragment>
        );
    }
}
 
export default App;