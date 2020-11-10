/*
    Memo is the Pure component of functional components.
*/


/* In this example, a parent component updates its state every 2 seconds, changing
the value only the first time. Every time the parent updates, so does the child component,
but since this child will use React.memo, it will not update after the first time. */

/* The Parent */
import React, { Component } from 'react';
import MemoComponent from './MemoComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            message: 'Hello!'
        }
    }

    componentDidMount(){ 
        setInterval(() => { // The state changer
            this.setState({message: 'Hi!'})
        }, 2000)
    }

    render() { 
        return (  
            <div>
                <MemoComponent message={this.state.message}/>
            </div>
        );
    }
}
 
export default ParentComponent;

/* The Memo Child */
import React from 'react';

const MemoComponent = (props) => {
    const {message} = props

    console.log('Re-rendering memo component. Message = ' + message) // Prints every update

    return(
        <h3>{message}</h3>
    )
}

export default React.memo(MemoComponent) // This line makes it a memo component