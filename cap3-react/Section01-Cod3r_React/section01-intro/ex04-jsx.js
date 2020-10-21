/*
    JSX is a react syntax that allows using html code inside javascript. To enable jsx we 
    must import react. After importing it, we can use the syntax.
*/

import React from 'react' // This enables JSX
import ReactDOM from 'react-dom'

const root = document.getElementById('root')
ReactDOM.render(
    <h1>Hello There</h1> // Usage of JSX => HTML inside Javascript
, root)


// We can also assign HTML to variables with JSX
const phrase2 = <h2>The Angel From My Nightmare</h2>

ReactDOM.render( // Calling the render function again, will clear what was on the page before
    phrase2
, root)
