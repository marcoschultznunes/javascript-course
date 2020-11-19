import React, { Component } from 'react';

class ClickComponent2 extends Component {

    render() { 
        const {clicks, incrementCounter} = this.props

        return (  
            <div>
                <h3>{clicks}</h3>
                <button className="pink-button" onClick={incrementCounter}>
                    Click
                </button>
            </div>
        );
    }
}
 
export default ClickComponent2;