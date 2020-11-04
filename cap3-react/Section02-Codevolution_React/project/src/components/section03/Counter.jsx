import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState((prevState) => ({
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