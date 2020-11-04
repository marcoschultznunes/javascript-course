/*
    3 ways to bind the 'this' in React, 1 unfavored and 2 other favored.

    1 - arrow function on call (unfavored, altough it is the best when passing parameters)
    2 - binding on the constructor (favored)
    3 - declaring the function as an arrow (favored)

    examples:

    1 - <button onClick={() => myfunction ()} />
    2 - this.myfunction2 = this.myfunction2().bind(this)
    3 - myfunction3 = () => { console.log('Hi') }

*/

/* The ObiWan.jsx component */
import React, { Component } from 'react';

class ObiWan extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            quote: '',
            h: 3
        }

        this.dontTry = this.dontTry.bind(this) // 2 - Binding this in constructor
    }

    helloThere(){
        this.setState({
            quote: 'Hello there ;)',
            h: 3
        })
    }

    dontTry(){
        this.setState({
            quote: "Don't try it.",
            h: 3
        })
    }

    chosenOne = () => { // 3 - Declaring as an arrow function
        this.setState({
            quote: 'You were the chosen one!',
            h: 1
        })
    }

    renderQuote(){
        switch(this.state.h){
            case 1: return <h1>{this.state.quote}</h1>
            case 2: return <h2>{this.state.quote}</h2>
            case 3: return <h3>{this.state.quote}</h3>
            default: return <h3>{this.state.quote}</h3>
        }
    }

    render() { 
        return(
            <div>
                {this.renderQuote()}
                
                {/* 1 - Arrow function on call */}
                <button className='blue-button' onClick={() => this.helloThere()}>
                    Quote 1
                </button>
                <button className='blue-button' onClick={this.dontTry}>
                    Quote 2
                </button>
                <button className='blue-button' onClick={this.chosenOne}>
                    Quote 3
                </button>
            </div>
        )
    }
}
 
export default ObiWan;