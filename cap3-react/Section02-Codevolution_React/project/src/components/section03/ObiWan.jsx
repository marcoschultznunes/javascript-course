import React, { Component } from 'react';

class ObiWan extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            quote: '',
            h: 3
        }

        this.dontTry = this.dontTry.bind(this)
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

    chosenOne = () => {
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