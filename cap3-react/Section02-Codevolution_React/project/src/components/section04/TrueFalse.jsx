import React, { Component } from 'react';

export class TrueFalseIf extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            color: 'green'
        }
    }

    render() { 
        if(this.state.color === 'green'){
            return <h3 className='green-text'>You can go on!</h3>
        } else{
            return <h3 className='red-text'>You should stop.</h3>
        }
    }
}

export const TrueFalseVariable = () => {
    const color = 'red'
    let elements = null

    if(color === 'green'){
        elements = <h3 className='green-text'>You can go on!</h3>
    } else{
        elements = <h3 className='red-text'>You should stop.</h3>
    }
     
    return elements
}

export const TrueFalseTernary = () => {
    const color = 'green'

    return(
        color === 'green' ? 
            <h3 className='green-text'>You can go on!</h3>:
            <h3 className='red-text'>You should stop.</h3>
    )
}

export const TrueFalseLogic = () => {
    const color = 'black'

    return(
        color === 'green' && <h3 className='green-text'>You can go on!</h3>
    )
}