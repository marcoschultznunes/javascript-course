/*
    We never modify the state directly, because it does not update the DOM. The setState
    function actually does that. 

    The setState function is asynchronous.

    This means that if we put code after its call, the code might execute before the state
    is changed. 

    To circumvent this problem, we can pass that code as the second parameter of the 
    setState function, as a callback function.
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
        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state) }) // Callback, so that it executes after it
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
            </div>
        )
    }
}

export default Counter

/* index.js */
import Counter from './components/section03/Counter'

ReactDOM.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>,
    document.getElementById('root')
);