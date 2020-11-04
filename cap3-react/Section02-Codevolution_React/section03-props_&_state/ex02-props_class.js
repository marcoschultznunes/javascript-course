/*
    In this example, we'll rewrite the example 01 from a functional to a class based 
    component.
*/

/* The Email.jsx component */
import React, {Component} from 'react'

class Email extends Component{
    render(){
        const { from, to, subject } = this.props

        return(
            <React.Fragment>
                <div>
                    <h3>From: {from}</h3>
                    <h3>To: {to}</h3>
                    <h3>Subject: {subject}</h3>
                    {this.props.children}
                </div>
                <hr/>
            </React.Fragment>
        )
    }
}

export default Email