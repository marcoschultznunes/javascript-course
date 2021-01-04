import React from 'react'
import { NavLink, Route } from 'react-router-dom'

import FoodList from './components/FoodList'
import LittleForm from './components/LittleForm'

const App = () => {
    return (  
        <React.Fragment>
            <header>
                <nav className='navbar'>
                    <ul className='links'>
                        <li><NavLink to="/" exact activeClassName="active-link"> Hello </NavLink></li>
                        <li><NavLink to="/shadow" activeClassName="active-link"> Shadow </NavLink></li>
                        <li><NavLink to="/angel" activeClassName="active-link"> Angel </NavLink></li>
                        <li><NavLink to="/victim" activeClassName="active-link"> Victim </NavLink></li>
                        <li><NavLink to="/list" activeClassName="active-link"> List </NavLink></li>
                        <li><NavLink to="/form" activeClassName="active-link"> Form </NavLink></li>
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

            <Route path="/list" component={FoodList} />
            <Route path="/form" component={LittleForm} />

        </React.Fragment>
    );
}
 
export default App;
