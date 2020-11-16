/*
    Error boundary is a class component that wraps child components, and it implements at 
least 1 of the 2 error handling lifecycle methods, so that any error on the child components 
gets handled by this component.

    The 2 error handling lifecycle methods:

    - (static) getDerivedStateFromError(error) => Handles any react internal error.

    - componentDidCatch(error, info) => It is only used for displaying errors on the console


    IMPORTANT: Error boundaries do not catch errors in event handlers. For that, you must 
    use the standard try and catch.

    IMPORTANT(2): The React default behavior in development is to display the error even if 
    it is handled. You can close the error with an X on the top-right of the screen.
*/


/* The ErrorBoundary.jsx component */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            error: false
        }
    }

    static getDerivedStateFromError(error){ // Returns new state 
        return {
            error: true
        }
    }

    componentDidCatch(error, info){ // Logs
        console.log(error, info)
    }

    render() { 
        if(this.state.error === true){
            return <h2>Something went wrong...</h2>
        }

        return this.props.children
    }
}
 
export default ErrorBoundary;


/* Hero.jsx component */
import React from 'react';

const Hero = (props) => {
    const {heroName} = props

    if(heroName === 'Joker'){
        throw Error // The error
    }

    return <h3>{heroName}</h3>
}

export default Hero


/* On index.js */
ReactDOM.render(
    <React.StrictMode>

        <ErrorBoundary>
            <Hero heroName="Batman"/>
        </ErrorBoundary>
    
        <ErrorBoundary>
            <Hero heroName="Superman"/>
        </ErrorBoundary>
    
        <ErrorBoundary>
            <Hero heroName="Joker"/> {/* The one that has an error */}
        </ErrorBoundary>
      
    </React.StrictMode>,
    document.getElementById('root')
);