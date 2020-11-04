/*
    We can have multiple components in the same file by using named exports.
    All of them using UC first letter.
    Each component will be a named component
    You have to import each component by using that exact same name.
*/

/* The Verses.jsx component */
import React from 'react'

export const Angel = () => <h2>The Angel From My Nightmare</h2>

export const Shadow = () => <h2>The Shadow In The Background Of The Morgue</h2>

export const Victim = () => <h2>The Unsuspecting Victim</h2>

/* index.js */
import { Angel, Shadow, Victim } from './components/Verses';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Angel />
    <Shadow />
    <Victim />
  </React.StrictMode>,
  document.getElementById('root')
);
