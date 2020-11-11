/*
    This example will cover an older way of using refs called callback refs. You shouldn't 
    use it anymore, but this example will cover it in case of coming across it on an older
    project, article, etc.
*/

// The example
import React, { Component } from 'react';

class SimpleRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef = null // Initialize the ref as null
        this.setInputRef = (element) => { // Create a setter for the ref   
            this.inputRef = element
        }
    }

    componentDidMount(){
        if(this.inputRef){ // It is important to check if is null
            this.inputRef.focus() // With callback refs, we don't use .current
        }
    }

    render() { 
        return (  
            <div>
                {/* Assign the element to the ref by calling the setter */}
                <input type="text" ref={this.setInputRef} placeholder="Name"/>
            </div>
        );
    }
}
 
export default SimpleRef;