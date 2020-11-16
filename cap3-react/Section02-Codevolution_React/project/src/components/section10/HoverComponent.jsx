import React, { Component } from 'react';
import incrementComponent from './incrementComponent';

class HoverComponent extends Component {
    render() { 
        const {clicks, incrementClicks} = this.props

        return (
            <div>
                <h3>{clicks}</h3>
                <button className='orange-button' onMouseOver={incrementClicks}>Increment</button>
            </div>
        );
    }
}
 
export default incrementComponent(HoverComponent);