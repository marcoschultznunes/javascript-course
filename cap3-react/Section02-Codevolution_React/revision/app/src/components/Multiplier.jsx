import React, { Component } from 'react';

class Multiplier extends Component {
    render() { 
        const {multiply, factor} = this.props

        return( 
            <button 
                className={factor === 0 ? 'bg-red' : 'bg-green'} 
                onClick={() => multiply(factor)}
            >
                {factor}
            </button>
        )
    }
}
 
export default Multiplier;
