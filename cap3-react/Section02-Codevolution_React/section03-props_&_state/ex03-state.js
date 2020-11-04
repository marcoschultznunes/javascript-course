/* 
    State is used because props are immutable
*/

/* The Click.jsx component */
import React, {Component} from 'react'

class Click extends Component{
    constructor(){ // This is required to access state, super() must be called
        super()
        this.state = { // this.state must be assigned
            message: ""
        }
    }

    message(){
        this.setState({
            message: "Thank You!"
        })
    }

    render(){
        return (
            <div>
                <h3>{this.state.message}</h3>
                {/* It is important that we use the arrow function, because of the 'this' */}
                <button onClick={_=>this.message()}>
                    Click Me!
                </button>
            </div>
        )
    }
}

export default Click

/* index.js */
import Click from './components/section03/Click'

ReactDOM.render(
    <React.StrictMode>
        <Click />
    </React.StrictMode>,
    document.getElementById('root')
);