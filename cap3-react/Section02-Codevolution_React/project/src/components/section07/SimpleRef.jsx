import React, { Component } from 'react';

class SimpleRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() { 
        return (  
            <div>
                <input type="text" ref={this.inputRef} placeholder="Name"/>
            </div>
        );
    }
}
 
export default SimpleRef;