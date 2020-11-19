import React, { Component } from 'react';

class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            clicks: 0
        }
    }

    incrementCounter = () => {
        this.setState((prevState) => {
            return {clicks: prevState.clicks + 1}
        })
    }
    
    render() { 
        return (  
            <div>
                {this.props.render(this.state.clicks, this.incrementCounter)}
            </div>
        );
    }
}
 
export default Counter2;