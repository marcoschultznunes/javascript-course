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
                <button style={{backgroundColor: 'darkslategray'}} onClick={_=>this.message()}>
                    Click Me!
                </button>
            </div>
        )
    }
}

export default Click