import React, { Component } from 'react';

class HoverComponent2 extends Component {

    render() { 
        const {clicks, incrementCounter} = this.props

        return (  
            <div>
                <h3>{clicks}</h3>
                <button className="cyan-button" onMouseOver={incrementCounter}>
                    Click
                </button>
            </div>
        );
    }
}
 
export default HoverComponent2;