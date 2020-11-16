import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            error: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            error: true
        }
    }

    componentDidCatch(error, info){
        console.log(error, info)
    }

    render() { 
        if(this.state.error === true){
            return ReactDOM.createPortal(
                <h2>Something went wrong...</h2>,
                document.getElementById('portal-root')
            )
        }

        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById('portal-root')
        )
    }
}
 
export default ErrorBoundary;