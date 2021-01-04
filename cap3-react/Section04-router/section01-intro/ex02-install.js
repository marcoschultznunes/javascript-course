/*
    We need 2 packages for react router:

    npm install --save react-router
    npm install --save react-router-dom

    or simply just install react-router-dom, as it has router as a dependency.
*/

/*
    On index.js, we'll wrap our application on a Browser Router element provided by the react 
    router package
*/

/* index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

/* app.jsx */
import React from 'react'
import { Route } from 'react-router-dom'

const App = () => {
    return (  
        <React.Fragment>
            <header>
                <nav className='navbar'>
                    <ul className='links'>
                        <li><a href="http://localhost:3000/">Hello</a></li>
                        <li><a href="http://localhost:3000/angel">Angel</a></li>
                        <li><a href="http://localhost:3000/shadow">Shadow</a></li>
                        <li><a href="http://localhost:3000/victim">Victim</a></li>
                    </ul>
                </nav>
            </header>
            
            <Route path="/" exact>
                <h1>Hello There</h1>
            </Route>
            <Route path="/angel" exact>
                <h1>The Angel From My Nightmare</h1>
            </Route>
            <Route path="/shadow" exact>
                <h1>The Shadow In The Background Of The Morgue</h1>
            </Route>
            <Route path="/victim" exact>
                <h1>The Unsuspecting Victim</h1>
            </Route>
        </React.Fragment>
    );
}
 
export default App;
