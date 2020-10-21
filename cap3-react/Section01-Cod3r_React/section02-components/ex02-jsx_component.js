// The component file
import React from 'react' // For JSX

export default () => { return (
    <div> {/* Comments in JSX */}
        <h2>Don't Waste Your Time On Me You're Already The Voice Inside My Head</h2>
        <h3>I Miss You, I Miss You</h3> 
        <h2>Don't Waste Your Time On Me You're Already The Voice Inside My Head</h2>
        <h3>I Miss You, I Miss You</h3>
    </div>
)}

// The index.js file
import Where from './components/where_are_you'
import Dont from './components/dont_waste'

const root = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1>Hello There</h1>
        <Where></Where>
        <Dont></Dont>
    </div>
, root)