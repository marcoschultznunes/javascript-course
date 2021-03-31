import React, { Component } from 'react';
import Multiplier from "./Multiplier";

class NumberPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            number: 1
        }
    }

    multiply = (factor) => {
        this.setState(prevState => ({number: prevState.number * factor}))
    }

    render() { 
        return (  
            <div>
                <h3>{this.state.number}</h3>
                <Multiplier multiply={this.multiply} factor={0}/>
                <Multiplier multiply={this.multiply} factor={1}/>
                <Multiplier multiply={this.multiply} factor={2}/>
                <Multiplier multiply={this.multiply} factor={3}/>
                <Multiplier multiply={this.multiply} factor={4}/>
                <Multiplier multiply={this.multiply} factor={5}/>
                <Multiplier multiply={this.multiply} factor={6}/>
                <Multiplier multiply={this.multiply} factor={7}/>
                <Multiplier multiply={this.multiply} factor={8}/>
                <Multiplier multiply={this.multiply} factor={9}/>
                <Multiplier multiply={this.multiply} factor={10}/>
            </div>
        );
    }
}
 
export default NumberPanel;
