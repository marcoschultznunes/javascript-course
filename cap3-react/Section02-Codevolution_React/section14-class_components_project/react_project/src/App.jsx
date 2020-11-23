import React, { Component } from 'react';
import { PageProvider } from './components/context/pageContext';
import Navbar from './components/Navbar';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home'
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
            case 'Products': return <h1>Products</h1>
            case 'Users': return <h1>Users</h1>
            case 'Orders': return <h1>Orders</h1>
            case 'Statistics': return <h1>Statistics</h1>

            default: return <h1>Error</h1>
        }
    }

    render() { 
        let body = this.updateBody()

        return (  
            <div>
                <PageProvider value={this.changePage}>
                    <Navbar page={this.state.page}/>
                </PageProvider>

                {body}
            </div>
        );
    }
}
 
export default App;