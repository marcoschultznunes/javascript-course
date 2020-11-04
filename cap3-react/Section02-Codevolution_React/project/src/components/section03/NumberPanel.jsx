import React, { Component } from 'react';
import Multiplier from './Multiplier';

class NumberPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 1
        }
    }

    multiply = (mult) => {
        console.log(mult)
        
        this.setState((prevState) => (
            {
                number: prevState.number * Number(mult)    
            }
        ))
    }

    render() { 
        return (  
            <div>
                <h3>{this.state.number}</h3>
                <Multiplier operator={this.multiply} factor='2' />
                <Multiplier operator={this.multiply} factor='3' />
                <Multiplier operator={this.multiply} factor='4' />
                <Multiplier operator={this.multiply} factor='5' />
                <Multiplier operator={this.multiply} factor='6' />
                <Multiplier operator={this.multiply} factor='7' />
                <Multiplier operator={this.multiply} factor='8' />
                <Multiplier operator={this.multiply} factor='9' />
                <Multiplier operator={this.multiply} factor='10' />
            </div>
        );
    }
}
 
export default NumberPanel ;
