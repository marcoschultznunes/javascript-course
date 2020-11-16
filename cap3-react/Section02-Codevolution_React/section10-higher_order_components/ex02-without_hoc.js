/*
    First, an example without using HOC. A hover counter and a click counter, only a single 
    line changes and its name
*/

/* The ClickComponent.jsx */
import React, { Component } from 'react';

class ClickComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicks: 0
        }
    }

    incrementClicks = () => {
        this.setState((prevState) => (
            {
                clicks: prevState.clicks + 1
            }
        ))
    }

    render() { 
        return (  
            <div>
                <h3>{this.state.clicks}</h3>
                <button 
                    className='green-button' 
                    onClick={this.incrementClicks /* Only this line changes */}
                >
                    Increment
                </button>
            </div>
        );
    }
}
 
export default ClickComponent;


/* The HoverComponent.jsx */
import React, { Component } from 'react';

class HoverComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicks: 0
        }
    }

    incrementClicks = () => {
        this.setState((prevState) => (
            {
                clicks: prevState.clicks + 1
            }
        ))
    }

    render() { 
        return (  
            <div>
                <h3>{this.state.clicks}</h3>
                <button 
                    className='orange-button' 
                    onMouseOver={this.incrementClicks /* Only this line changes */}
                >
                    Increment
                </button>
            </div>
        );
    }
}

/*
    This number of unchanged lines would tremendously increase if we had more different 
    component types. Using HOC can allow us to save many lines of code.
*/