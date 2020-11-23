/*
    Refs allow components to reference DOM elements and interact with them. Class components 
    use the createRef() function, function components use the useRef() hook.

    A good example is making an input be focused on loading the page (componentDidMount).
*/

/* The example */
import React, { Component } from 'react';

class SimpleRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef() // First, create a ref and assign it to a variable
    }

    componentDidMount(){
        this.inputRef.current.focus() // Finally, the binded ref is used

        /* The current accesses the element, which then has the properties of a regular JS
        HTML object, such as value, style, focus, etc. */
    }

    render() { 
        return (  
            <div>
                {/* The attribute ref binds the ref created in the constructor to the
                input element */}
                <input type="text" ref={this.inputRef} placeholder="Name"/>
            </div>
        );
    }
}
 
export default SimpleRef;
