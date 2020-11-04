import React from 'react'

const Email = (props) => {
    const { from, to, subject } = props

    return (
        <React.Fragment>
            <div>
                <h3>From: {from}</h3>
                <h3>To: {to}</h3>
                <h3>Subject: {subject}</h3>
                {props.children}
            </div>
            <hr/>
        </React.Fragment>
    )
}

export default Email