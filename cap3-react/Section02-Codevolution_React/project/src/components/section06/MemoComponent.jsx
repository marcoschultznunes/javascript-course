import React from 'react';

const MemoComponent = (props) => {
    const {message} = props

    console.log('Re-rendering memo component. Message = ' + message)

    return(
        <h3>{message}</h3>
    )
}

export default React.memo(MemoComponent)