/*
    Render props is a pattern that used for the same purpose as HOC. In it, we pass a 
    function as prop which controls the logic of the component.
*/

/* First, we make the render props component, which contains the common functionalities 
that will be passed to the children. They are passed through a function inside the render 
method. The function is defined on index.js */
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
                {/* Function that passes the functionalities to the children, it is defined
                    on index.js, and it returns the child component */}
                {this.props.render(this.state.clicks, this.incrementCounter)}
            </div>
        );
    }
}
 
export default Counter2;


/* Then, in index.js, where we put the component instances, we define the actual render
function */
ReactDOM.render(
    
    <React.StrictMode>
    
        <Counter2 render={(clicks, incrementCounter) => (
            // Returns the component with the functionalities passed as params
            <ClickComponent2 clicks={clicks} incrementCounter={incrementCounter} />
        )}/>
    
        <Counter2 render={(clicks, incrementCounter) => (
            <HoverComponent2 clicks={clicks} incrementCounter={incrementCounter} />
        )}/>
  
    </React.StrictMode>,
    document.getElementById('root')
);


/* Then, we make the components, which simply get the props and use them whatever way 
desired */
import React, { Component } from 'react';

class ClickComponent2 extends Component {

    render() { 
        const {clicks, incrementCounter} = this.props // Getting the passed props

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


/* Hover Component */
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