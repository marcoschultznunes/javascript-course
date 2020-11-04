/*
    We can make a Child component trigger a function on the parent and modify it by passing
    that function as a parameter to the child component
*/

/* The NumberPanel.jsx component */
import React, { Component } from 'react';
import Multiplier from './Multiplier';

class NumberPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 1
        }
    }

    multiply = (mult) => { // We are using an arrow function so that the 'this' is binded
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

                {/* The function is passed to the child components */}
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

/* The child Multiplier.jsx component */
import React from 'react';

const Multiplier = (props) => {
    const { operator, factor } = props

    return (
        <React.Fragment>
            <button 
                style={{backgroundColor: 'darkred'}}
                onClick={() => operator(factor) /* Putting a param on the left side would 
                pass an event object, the one used to detect keys and mouseclicks! */}
            >
                {factor}
            </button> 
        </React.Fragment>
    )
}

export default Multiplier