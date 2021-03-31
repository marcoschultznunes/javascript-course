import React, { Component } from 'react';

class CounterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            count: 0
        }
    }

    incrementCount = (amount) => {
        this.setState((prevState) => ({count: prevState.count + amount}))
    }

    render() { 
        return (  
            <div>
                <h3>{this.state.count}</h3>
                <button className="bg-red" onClick={() => this.incrementCount(-5)}>-5</button>
                <button className="bg-orange" onClick={() => this.incrementCount(-1)}>-1</button>
                <button className="bg-blue" onClick={() => this.incrementCount(+1)}>+1</button>
                <button className="bg-green" onClick={() => this.incrementCount(+5)}>+5</button>
            </div>
        );
    }
}
 
export default CounterBox;
