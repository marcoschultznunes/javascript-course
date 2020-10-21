/*
    The params to a functional component are passed as an object parameter to the function,
    it is an object called props.
*/
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


// The index.js file
import Where from './components/where_are_you'
import Dont from './components/dont_waste'
import SizedText from './components/sized_text'

const size = 5

const root = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1>Hello There</h1>
        <Where />
        <Dont />
        <SizedText h="2" text="Ma Boi"/> {/* Parameters are passed as regular html params */}
        <SizedText h={size} text="Oi" /> {/* You can also pass JS variables */}
    </div>
, root)
