/*
    In HOC we create usea function that receives a component and returns a new version, 
adding functionalities and properties by passing them as props to that component. The 
component then decides how to use these props.
    The HOC function renders the component with these props passed.
    The Component renders its content with the props provided by the HOC function
*/

/* The HOC incrementComponent.jsx */
import React, {Component} from 'react';

const incrementComponent = WrappedComponent => {
    class IncrementComponent extends Component {
        constructor(props) { // If we want to use props we must pass them to the component
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

        render(){
            return (
                // Renders the component with the functions and state passed as props.
                <WrappedComponent 
                    clicks={this.state.clicks} 
                    incrementClicks={this.incrementClicks}
                />
            )           
        }
    }
     
    return IncrementComponent; // Returns the enhanced component
}

export default incrementComponent



/* The ClickComponent.jsx */
import React, {Component} from 'react';
import incrementComponent from './incrementComponent';

class ClickComponent extends Component{
    
    render(){
        // Uses those props to render its content
        const {clicks, incrementClicks} = this.props 
        
        return (  
            <div>
                <h3>{clicks}</h3>
                <button 
                    className='green-button' 
                    onClick={incrementClicks /* The onClick, which differs it */} 
                    {...this.props /* Must be done in order to pass props */}
                >
                    Increment
                </button>
            </div>
        );
    }
}
 
export default incrementComponent(ClickComponent);


/* HoverComponent.jsx */
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