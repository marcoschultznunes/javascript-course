/*
    Functional components are always preferred, they are the more modern approach to 
    writing React components.

    Advantages of functional components:
        - No "this" keyword;
        - Simpler logic
        - You can still handle state with hooks

    You still must know class components because older apps can still be using them.
*/

/* The Where.jsx component */
import React, { Component } from 'react' // Needs these imports

class Where extends Component { // Needs to extend Component
    render(){ // Needs to have a render() function
        return <h1>Where Are You</h1>
    }
}

export default Where

/* index.js */
import Where from './components/Where'

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Angel />
    <Shadow />
    <Victim />
    <Where />
  </React.StrictMode>,
  document.getElementById('root')
);