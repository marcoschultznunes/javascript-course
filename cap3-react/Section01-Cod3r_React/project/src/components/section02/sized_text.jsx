import React from 'react'

export default (props) => {
    const h = Number(props.h)
    const text = props.text

    if(!Number.isInteger(h) || h < 1){
        return 'Error: Invalid text size!'
    }

    switch(h){
        case 1: return <h1>{text}</h1> // No need for breaks, as they all return
        case 2: return <h2>{text}</h2>
        case 3: return <h3>{text}</h3>
        case 4: return <h4>{text}</h4>
        case 5: return <h5>{text}</h5>
        default: return 'Error: text size too small! (1 to 5 are the valid sizes)'
    }
}