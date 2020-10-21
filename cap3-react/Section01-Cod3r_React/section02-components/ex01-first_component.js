/*
    As a convention, components are named with the first letter capitalized.
*/

// The component file (THESE ARE FUNCTIONAL COMPONENTS, there are also class components)
module.exports = () => 'Where Are You' // Returns a simple text

// On index.js
import Where from './components/where_are_you' //<Where></Where> => Call the component

const root = document.getElementById('root')
ReactDOM.render( // Multiple tags must be wrapped by a div or another tag
    <div> 
        <h1>Hello There</h1>
        <Where></Where>
    </div>
, root)