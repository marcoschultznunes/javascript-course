/* 
    React groups multiple setState calls into one, for better performance.

    This means that if we try to update the state more than once in a function call,
    the state will only change after all of the setState calls.

    To circumvent this, we use prevState
*/

/* The Counter.jsx component */
import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState((prevState, props) => ({ // Using the prevState (p2 is props)
            count: prevState.count + 1
        }), () => { console.log(this.state.count) })
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button 
                    style={{backgroundColor: 'darkslategray'}} 
                    onClick={_=>this.increment()}
                >
                    Increase
                </button>
                <button 
                    style={{backgroundColor: 'darkslategray'}} 
                    onClick={_=>this.incrementFive()}
                >
                    Plus Five
                </button>
            </div>
        )
    }
}

export default Counter