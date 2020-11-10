import React, { Component } from 'react';
import MemoComponent from './MemoComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            message: 'Hello!'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({message: 'Hi!'})
        }, 2000)
    }

    render() { 
        return (  
            <div>
                <MemoComponent message={this.state.message}/>
            </div>
        );
    }
}
 
export default ParentComponent;