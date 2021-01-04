/* 
    To prevent the page from reloading we'll replace our anchor tags with react router Link 
    components. 
*/

/* app.jsx */
import React from 'react'
import { Link, Route } from 'react-router-dom'

const App = () => {
    return (  
        <React.Fragment>
            <header>
                <nav className='navbar'>
                    <ul className='links'>
                        <li><Link to="/">Hello</Link></li>
                        <li><Link to="/angel">Angel</Link></li>
                        <li><Link to="/shadow">Shadow</Link></li>
                        <li><Link to="/victim">Victim</Link></li>
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

/* 
    We can still use the 

    .links a {

    }
    
    selector for the CSS, as the Link element generates an anchor element which does not reload
    the page.
*/
